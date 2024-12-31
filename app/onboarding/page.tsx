"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WhoIsM from "./_components/WhoIsM";
import JinnSpirit from "./_components/JinnSpirit";
import MSpirit from "./_components/MSpirit";
import MateTradition from "./_components/MateTradition";
import styles from "./page.module.css";
import clx from "classnames";
import Instructions from "./_components/Instructions";

const components = [MateTradition, WhoIsM, JinnSpirit, MSpirit, Instructions];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleNextStep = () => {
    if (currentStep === components.length - 1) {
      localStorage.setItem("onboarded", "true");
      router.push("/home");
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    console.log("Current Step:", currentStep);
  }, [currentStep]);

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles["content-wrapper"]}
        style={{
          transform: `translateX(-${currentStep * 100}%)`,
          transition: "transform 2s ease-in-out",
        }}
      >
        {components.map((Component, index) => (
          <div
            key={index}
            className={clx(
              styles.page,
              index === currentStep ? styles.fadeIn : styles.fadeOut
            )}
          >
            <Component
              onNext={handleNextStep}
              onPrevious={handlePreviousStep}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;

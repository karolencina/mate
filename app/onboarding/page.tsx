"use client";

import { useState } from "react";
import WhoIsM from "./_components/WhoIsM";
import JinnSpirit from "./_components/JinnSpirit";
import MSpirit from "./_components/MSpirit";
import MateTradition from "./_components/MateTradition";
import styles from "./page.module.css";
import clx from "classnames";

const components = [MateTradition, WhoIsM, JinnSpirit, MSpirit];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

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

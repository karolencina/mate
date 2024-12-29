"use client";

import { useState } from "react";
import WhoIsMate from "./_components/WhoIsMate";
import JinnSpirit from "./_components/JinnSpirit";
import MateSpirit from "./_components/MateSpirit";
import styles from "./page.module.css";
import clx from "classnames";

const components = [WhoIsMate, JinnSpirit, MateSpirit];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
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
            <Component onNext={handleNextStep} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;

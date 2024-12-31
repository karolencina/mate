"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { useSettings } from "../context/SettingsContext"; // Import the context hook

const Settings = () => {
  // Get the global state and setter function
  const { showNSFW, setShowNSFW } = useSettings();

  const [localShowNSFW, setLocalShowNSFW] = useState(showNSFW); // Local state to sync UI

  useEffect(() => {
    setLocalShowNSFW(showNSFW);
    console.log("Current global showNSFW setting:", showNSFW); // Log current global setting
  }, [showNSFW]);

  const handleClick = (value: boolean) => {
    setLocalShowNSFW(value);
    setShowNSFW(value); // Save the updated value to the global context immediately
    console.log("Settings updated:", { showNSFW: value }); // Log updated settings
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.contentContainer}>
        <Text className={styles.title}>Settings</Text>
        <div className={styles.formGroup}>
          <label htmlFor="showNSFWF">
            <Text>Show NSFW Facts</Text>
          </label>
          <div className={styles.selectionGroup}>
            <span
              className={`${styles.selection} ${
                !localShowNSFW ? "" : styles.inactive
              }`}
              onClick={() => handleClick(false)} // Update local state
            >
              <Text className={styles.optionsText}>No</Text>
            </span>
            <span
              className={`${styles.selection} ${
                localShowNSFW ? "" : styles.inactive
              }`}
              onClick={() => handleClick(true)} // Update local state
            >
              <Text className={styles.optionsText}>Yes</Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

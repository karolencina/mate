"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Text from "@/components/Text";
import Button from "@/components/Button";

const Settings = () => {
  const [showNSFW, setShowNSFW] = useState(false);

  const handleSave = () => {
    // Handle save logic here
    console.log("Settings saved:", { showNSFW });
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
                showNSFW ? "" : styles.inactive
              }`}
              onClick={() => setShowNSFW(true)}
            >
              <Text className={styles.optionsText}>No</Text>
            </span>
            <span
              className={`${styles.selection} ${
                !showNSFW ? "" : styles.inactive
              }`}
              onClick={() => setShowNSFW(false)}
            >
              <Text className={styles.optionsText}>Yes</Text>
            </span>
          </div>
        </div>
      </div>

      <Button className={styles.saveButton} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Settings;

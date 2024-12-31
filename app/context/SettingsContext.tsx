"use client";

import React, { createContext, useContext, useState } from "react";

type SettingsContextType = {
  showNSFW: boolean;
  setShowNSFW: (value: boolean) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showNSFW, setShowNSFW] = useState(false);

  return (
    <SettingsContext.Provider value={{ showNSFW, setShowNSFW }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

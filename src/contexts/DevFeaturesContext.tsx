import React, { createContext, useContext, useState } from 'react';

interface DevFeaturesContextType {
  isDevMode: boolean;
  toggleDevMode: () => void;
}

const DevFeaturesContext = createContext<DevFeaturesContextType>({
  isDevMode: false,
  toggleDevMode: () => {}
});

export const DevFeaturesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState(false);

  const toggleDevMode = () => {
    setIsDevMode(!isDevMode);
  };

  return (
    <DevFeaturesContext.Provider value={{ isDevMode, toggleDevMode }}>
      {children}
    </DevFeaturesContext.Provider>
  );
};

export const useDevFeatures = () => useContext(DevFeaturesContext);

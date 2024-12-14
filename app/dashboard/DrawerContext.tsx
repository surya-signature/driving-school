"use client"
import React, { createContext, useContext, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

type DrawerContextType = {
  isDrawerVisible: boolean;
  toggleDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

export const DrawerProvider: React.FC = ({ children }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible((prev) => !prev); // Toggle drawer visibility
  };

  return (
    <DrawerContext.Provider value={{ isDrawerVisible, toggleDrawer }}>
      {children}
      
    </DrawerContext.Provider>
  );
};

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SiderContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SiderContext = createContext<SiderContextType | undefined>(undefined);

export const useSider = () => {
  const context = useContext(SiderContext);
  if (!context) {
    throw new Error('useSider must be used within a SiderProvider');
  }
  return context;
};

export const SiderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <SiderContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SiderContext.Provider>
  );
};

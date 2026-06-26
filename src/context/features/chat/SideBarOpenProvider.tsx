

import { useState, type ReactNode } from 'react';
import { SideBarOpenContext } from './SideBarOpenContext';

export const SideBarOpenProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  return (
    <SideBarOpenContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SideBarOpenContext.Provider>
  );
};
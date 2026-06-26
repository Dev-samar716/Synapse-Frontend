

import { createContext } from 'react';

interface SideBarOpenContextType {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (open: boolean) => void;
}

export const SideBarOpenContext = createContext<SideBarOpenContextType | undefined>(undefined);
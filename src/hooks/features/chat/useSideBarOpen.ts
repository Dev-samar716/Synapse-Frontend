

import { useContext } from 'react';
import { SideBarOpenContext } from '../../../context/features/chat/SideBarOpenContext'; 

export const useSideBarOpen = () => {
  const context = useContext(SideBarOpenContext);

  if (!context) {
    throw new Error('useSideBarOpen must be used within a SideBarOpenProvider');
  }
  const { isSideBarOpen, setIsSideBarOpen } = context;
  
  return{ isSideBarOpen, setIsSideBarOpen };
};
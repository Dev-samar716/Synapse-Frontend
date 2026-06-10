
import { createContext } from "react";

export interface CurrentConversationIdContextType {
  currentConversationId: number | null;
  setCurrentConversationId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

export const CurrentConversationIdContext =
  createContext<CurrentConversationIdContextType | null>(null);
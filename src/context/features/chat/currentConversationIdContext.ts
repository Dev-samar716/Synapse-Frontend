
import { createContext } from "react";

export interface CurrentConversationIdContextType {
  currentConversationId: string | null;
  setCurrentConversationId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export const CurrentConversationIdContext =
  createContext<CurrentConversationIdContextType | null>(null);
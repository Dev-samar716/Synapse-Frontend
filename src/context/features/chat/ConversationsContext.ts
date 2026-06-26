

import { createContext } from "react";

export interface Conversation {
  id: string;
  title: string;
  created_at: bigint;
  user_id: number;
}

export interface ConversationsContextType {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
}

export const ConversationsContext = createContext<ConversationsContextType | undefined>(
  undefined
);
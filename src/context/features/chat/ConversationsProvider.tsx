

import { useState, type ReactNode } from "react";
import {
  ConversationsContext,
  type Conversation,
} from "./ConversationsContext";

interface Props {
  children: ReactNode;
}

export const ConversationsProvider = ({ children }: Props) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  return (
    <ConversationsContext.Provider
      value={{ conversations, setConversations }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};
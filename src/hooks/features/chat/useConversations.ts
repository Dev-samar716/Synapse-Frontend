

import { useContext } from "react";
import { ConversationsContext } from "../../../context/features/chat/ConversationsContext";

export const useConversations = () => {
  const context = useContext(ConversationsContext);

  if (!context) {
    throw new Error(
      "useConversations must be used within a ConversationsProvider"
    );
  }

  const {conversations, setConversations} = context;

  return {conversations, setConversations};
};
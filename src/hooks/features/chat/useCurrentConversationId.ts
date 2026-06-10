

import { useContext } from "react";
import { CurrentConversationIdContext } from "../../../context/features/chat/currentConversationIdContext";

export default function useCurrentConversationId() {
  const context = useContext(CurrentConversationIdContext);

  if (!context) {
    throw new Error(
      "useCurrentConversationId must be used within a CurrentConversationIdProvider"
    );
  }

  const {currentConversationId, setCurrentConversationId} = context;

  return {currentConversationId, setCurrentConversationId};
}
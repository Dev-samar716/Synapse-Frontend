

import { useState } from "react";
import {
  CurrentConversationIdContext,
} from "./currentConversationIdContext";

interface CurrentConversationIdProviderProps {
  children: React.ReactNode;
}

export default function CurrentConversationIdProvider({
  children,
}: CurrentConversationIdProviderProps) {
  const [currentConversationId, setCurrentConversationId] = useState<
    number | null
  >(null);

  return (
    <CurrentConversationIdContext.Provider
      value={{
        currentConversationId,
        setCurrentConversationId,
      }}
    >
      {children}
    </CurrentConversationIdContext.Provider>
  );
}
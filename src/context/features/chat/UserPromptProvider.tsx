

import { useState } from "react";
import UserPromptContext from "./UserPromptContext";

type UserPromptProviderProps = {
  children: React.ReactNode;
};

const UserPromptProvider = ({
  children,
}: UserPromptProviderProps) => {
  const [prompt, setPrompt] = useState<string>("");

  return (
    <UserPromptContext.Provider
      value={{
        prompt,
        setPrompt,
      }}
    >
      {children}
    </UserPromptContext.Provider>
  );
};

export default UserPromptProvider;
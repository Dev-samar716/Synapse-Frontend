

import { createContext } from "react";

type UserPromptContextType = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
};

const UserPromptContext =
  createContext<UserPromptContextType | null>(null);

export default UserPromptContext;


import type { MouseEvent } from "react";
import { Paperclip, SendHorizonal } from "lucide-react";
import useUserPrompt from "../hooks/features/chat/useUserPrompt";
import useContent from "../hooks/features/chat/useContent";
import sendChatMessage from "../functions/features/chat/sendChatMessage";
import useResponseLoading from "../hooks/features/chat/useResponseLoading";

const InputBox = () => {

  const { prompt, setPrompt } = useUserPrompt();
  const { contents, setContents } = useContent();
  const { setResponseLoading } = useResponseLoading();

  const handleSend = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setResponseLoading(true);

    const content = {
      role: "user",
      parts: [{text: prompt}]
    }

    const updatedContent = [...contents, content];

    setContents(updatedContent);
    
    await sendChatMessage({contents: updatedContent, setContents});

    setResponseLoading(false);
  }

  return (
    <div className="w-full border-t border-zinc-800 bg-zinc-950 px-6 py-5">
      <div className="max-w-4xl mx-auto">
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl px-4 py-3 flex items-end gap-3">
          {/* Attachment */}
          <button className="w-10 h-10 rounded-xl hover:bg-zinc-800 flex items-center justify-center transition">
            <Paperclip className="w-5 h-5 text-zinc-400" />
          </button>

          {/* Input */}
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask anything..."
            rows={1}
            className="
              flex-1
              bg-transparent
              resize-none
              outline-none
              text-zinc-100
              placeholder:text-zinc-500
              text-sm
              py-2
              max-h-40
            "
          />

          {/* Send Button */}
          <button onClick={handleSend} className="w-11 h-11 rounded-2xl bg-white hover:bg-zinc-200 transition flex items-center justify-center">
            <SendHorizonal className="w-5 h-5 text-black" />
          </button>
        </div>

        <p className="text-center text-xs text-zinc-500 mt-3">
          AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

export default InputBox;
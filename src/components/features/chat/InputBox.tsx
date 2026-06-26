
import type { MouseEvent } from "react";
import { Paperclip, SendHorizonal } from "lucide-react";
import useUserPrompt from "../../../hooks/features/chat/useUserPrompt";
import useContent from "../../../hooks/features/chat/useContent";
import sendChatMessage from "../../../functions/features/chat/sendChatMessage";
import useResponseLoading from "../../../hooks/features/chat/useResponseLoading";
import useAuth from "../../../hooks/features/auth/useAuth";
import useCurrentConversationId from "../../../hooks/features/chat/useCurrentConversationId";
import { useParams } from "react-router-dom";

const InputBox = () => {
  const id = useParams().id
  const { prompt, setPrompt } = useUserPrompt();
  const { contents, setContents } = useContent();
  const { setResponseLoading } = useResponseLoading();
  const { userInfo } = useAuth();
  const { setCurrentConversationId } = useCurrentConversationId();

  if(!userInfo) return null;

  const handleSend = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setResponseLoading(true);

    const content = {
      role: "user",
      parts: [{text: prompt}]
    }

    const updatedContent = [...contents, content];

    setContents(updatedContent);
    
    await sendChatMessage({contents: updatedContent, setContents, currentConversationId : id != null ? id : null, 
      setCurrentConversationId
    });

    setResponseLoading(false);
  }

  return (
    <div className="w-full border-t border-zinc-800 bg-zinc-950 px-4 py-3 md:px-6 md:py-5 flex justify-center">
      {/* Container scales to full width on mobile, and drops back to 78% on desktop */}
      <div className="w-full md:w-[98%]">
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl px-3 py-2 md:px-4 md:py-3 flex items-end gap-2 md:gap-3">
          
          {/* Attachment Button */}
          <button className="w-9 h-9 md:w-10 md:h-10 rounded-xl hover:bg-zinc-800 flex items-center justify-center transition shrink-0">
            <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-zinc-400" />
          </button>

          {/* Input Box */}
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
              py-1.5
              md:py-2
              max-h-32
              md:max-h-40
            "
          />

          {/* Send Button */}
          <button onClick={handleSend} className="w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-white hover:bg-zinc-200 transition flex items-center justify-center shrink-0">
            <SendHorizonal className="w-4 h-4 md:w-5 md:h-5 text-black" />
          </button>
        </div>

        <p className="text-center text-[11px] md:text-xs text-zinc-500 mt-2 md:mt-3 px-2">
          AI can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

export default InputBox;
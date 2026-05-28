

type ChatMessageProps = {
  role: string;
  message: string;
  loading?: boolean;
};

const ChatMessage = ({
  role,
  message,
  loading = false,
}: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          px-5
          py-4
          rounded-2xl
          text-sm
          leading-relaxed
          shadow-lg
          ${
            isUser
              ? "bg-white text-black rounded-br-md"
              : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-md"
          }
        `}
      >
        {loading ? (
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" />
          </div>
        ) : (
          message
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
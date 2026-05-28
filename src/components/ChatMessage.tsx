

type ChatMessageProps = {
  role: string
  message: string;
};

const ChatMessage = ({
  role,
  message,
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
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
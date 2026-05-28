

import ReactMarkdown from "react-markdown";

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
          whitespace-pre-wrap
          break-words
          ${
            isUser
              ? "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-md"
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
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mb-4">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="text-xl font-semibold mb-3 mt-6">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mb-2 mt-5">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-4 text-zinc-300 leading-7">
                  {children}
                </p>
              ),

              ul: ({ children }) => (
                <ul className="list-disc ml-6 mb-4">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal ml-6 mb-4">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="mb-1">
                  {children}
                </li>
              ),

              strong: ({ children }) => (
                <strong className="font-bold text-white">
                  {children}
                </strong>
              ),

              code: ({ children }) => (
                <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              ),
            }}
          >
            {message}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
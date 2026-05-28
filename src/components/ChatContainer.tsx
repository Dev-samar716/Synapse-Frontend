
import useContent from "../hooks/features/chat/useContent";
import useResponseLoading from "../hooks/features/chat/useResponseLoading";
import ChatMessage from "./ChatMessage";

const ChatContainer = () => {
  const { contents } = useContent();
  const { responseLoading } = useResponseLoading();

  return (
    <main className="flex-1 overflow-y-auto px-6 py-8 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {contents.map((content, index) => {
          const text = content?.parts?.[0]?.text ?? "No message";

          return (
            <ChatMessage
              key={index}
              role={content?.role || "model"}
              message={text}
            />
          );
        })}

        {responseLoading && (
          <ChatMessage
            role="model"
            message=""
            loading={true}
          />
        )}
      </div>
    </main>
  );
};

export default ChatContainer;
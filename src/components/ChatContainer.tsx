
import useContent from "../hooks/features/chat/useContent";
import ChatMessage from "./ChatMessage";

const ChatContainer = () => {

  const { contents }  = useContent();

  console.log(contents);
  return (
    <main className="flex-1 overflow-y-auto px-6 py-8 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {contents
  .filter(content => content.parts?.[0]?.text)   // Only showing messages with text
  .map((content, index) => (
    <ChatMessage
      key={index}
      role={content.role}
      message={content.parts[0].text}
    />
  ))}
      </div>
    </main>
  );
};

export default ChatContainer;
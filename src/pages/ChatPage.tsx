
import ChatContainer from "../components/ChatContainer";
import InputBox from "../components/InputBox";

const ChatPage = () => {
  return (
    <div className="w-full h-screen bg-black flex overflow-hidden">

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">

        {/* Chat Messages */}
        <ChatContainer />

        {/* Input */}
        <InputBox />
      </div>
    </div>
  );
};

export default ChatPage;
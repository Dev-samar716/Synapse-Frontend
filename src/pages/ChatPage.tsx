import { useParams } from "react-router-dom";
import Sidebar from "../components/SideBar";
import ChatContainer from "../components/features/chat/ChatContainer";
import InputBox from "../components/features/chat/InputBox";
import useCurrentConversationId from "../hooks/features/chat/useCurrentConversationId";

const ChatPage = () => {
  const id = useParams().id;
  const { setCurrentConversationId } = useCurrentConversationId();

  if(id) {
    setCurrentConversationId(Number(id));
  }

  return (
    <div className="w-full h-screen bg-black flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

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
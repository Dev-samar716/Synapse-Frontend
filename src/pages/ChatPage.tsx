import { useParams } from "react-router-dom";
import Sidebar from "../components/SideBar";
import ChatContainer from "../components/features/chat/ChatContainer";
import InputBox from "../components/features/chat/InputBox";
import useCurrentConversationId from "../hooks/features/chat/useCurrentConversationId";
import useAuth from "../hooks/features/auth/useAuth";
import loadConversationAPI from "../services/features/chat/loadConversationAPI";
import { useEffect, useState } from "react";
import useContent from "../hooks/features/chat/useContent";
import conversationsAPI from "../services/features/chat/conversationsAPI";
import { useConversations } from "../hooks/features/chat/useConversations";
import { useSideBarOpen } from "../hooks/features/chat/useSideBarOpen"; 

interface Message {
  id: number;
  conversation_id: string;
  created_at: bigint;
  content: string;
  role: string;
}

const ChatPage = () => {
  const id = useParams().id;
  const { currentConversationId, setCurrentConversationId } = useCurrentConversationId();
  const { userInfo } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { setContents } = useContent();
  const { setConversations } = useConversations();
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarOpen(); 

  useEffect(() => {
    console.log(id);
    if (!id || !userInfo) return setContents([]);
     
    //A guard clause to avoid redundant api fetch
    if (id === currentConversationId) return;

    setCurrentConversationId(id);

    const loadConversation = async () => {
      const data = await loadConversationAPI({
        currentConversationId: id,
        setErrorMessage
      });

      setContents(
        data.messagesResult.map((message: Message) => ({
          role: message.role,
          parts: [{ text: message.content }]
        }))
      );
    };

    loadConversation();
  }, [id, userInfo]);

  useEffect(() => {
    if(!userInfo) return;

    const conversationHistory = async() => {
      const data = await conversationsAPI();
      if(data) {
        setConversations(data.conversations);
      }
    }
    conversationHistory();
  }, [id, userInfo]);

  return (
    <div className="w-full h-screen bg-black flex overflow-hidden relative">
      {/* Dark Dim Overlay for Mobile Drawers */}
      {isSideBarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsSideBarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col md:pl-[280px] pl-0 w-full transition-all duration-300">
        
        {/* Floating Top Header Area containing Hamburger Trigger */}
        <header className="h-14 w-full flex items-center px-4 md:px-6 justify-between shrink-0">
          <button
            onClick={() => setIsSideBarOpen(true)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 transition"
            title="Open navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
          
          <div className="md:hidden text-zinc-400 font-medium text-sm">Synapse AI</div>
          <div className="w-9 md:hidden" /> 
        </header>

        {/* Chat Messages */}
        <ChatContainer errorMessage={errorMessage}/>

        {/* Input Form Wrapper */}
        <InputBox />
      </div>
    </div>
  );
};

export default ChatPage;
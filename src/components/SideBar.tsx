import { Link } from 'react-router-dom';
import useAuth from '../hooks/features/auth/useAuth';
import logout from '../functions/features/auth/Logout';
import { useConversations } from '../hooks/features/chat/useConversations';
import deleteConversationAPI from '../services/features/chat/deleteConversationAPI';
import { useSideBarOpen } from '../hooks/features/chat/useSideBarOpen'; 
import router from '../Router/router';

const Sidebar = () => {
  const { setUserInfo } = useAuth();
  const { setConversations, conversations } = useConversations();
  const { isSideBarOpen, setIsSideBarOpen } = useSideBarOpen(); 
  const reversedConversation = []

  const handleDelete = async ({ id }: { id: string }) => {
    const data = await deleteConversationAPI({ id });

    if (data.success) {
      setConversations(prev => prev.filter(conversation => conversation.id !== id));
      router.navigate("/chat");
    }
  };

  if(conversations) {
    const starting_index = conversations.length - 1;

    for (let i = starting_index; i >= 0; i--) {
       reversedConversation.push(conversations[i]);
    }
  }

  return (
    <aside 
      className={`w-[280px] h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col justify-between px-4 py-5 fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out 
        ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-6 overflow-hidden flex-1">
        <div className="flex items-center justify-between px-1">
          <div>
            <h1 className="text-white text-lg font-semibold">
              Synapse
            </h1>
            <p className="text-zinc-400 text-sm">
              Educational AI platform
            </p>
          </div>

          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsSideBarOpen(false)}
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition border border-transparent hover:border-zinc-800/60"
            title="Close Sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        {/* Action & Navigation */}
        <nav className="flex flex-col gap-2">
          <Link 
            to="/chat" 
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium text-sm mb-2 shadow-sm shadow-blue-600/10"
            onClick={() => setIsSideBarOpen(false)} // Close layout on route change (Mobile)
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            New Chat
          </Link>

          <Link className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition text-zinc-200"
            to="/auth/login" onClick={() => setIsSideBarOpen(false)}>
            Login
          </Link>

          <Link className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition text-zinc-200"
            to="/auth/register" onClick={() => setIsSideBarOpen(false)}>
            Sign Up
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-red-500/10 transition text-red-400"
            onClick={() => { logout({ setUserInfo }); setIsSideBarOpen(false); }}>
            Logout
          </button>
        </nav>

        <hr className="border-zinc-800" />

        {/* Conversations Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="text-xs font-semibold text-zinc-500 px-2 uppercase tracking-wider mb-2">
            Recent Conversations
          </span>

          <div className="flex flex-col gap-1 overflow-y-auto pr-1 max-h-[calc(100vh-480px)] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full">
            {reversedConversation && reversedConversation.length > 0 ? (
              reversedConversation.map((chat) => (
                <div
                  key={chat.id}
                  className="group relative w-full flex items-center rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60 transition text-sm font-medium border border-transparent hover:border-zinc-800/40"
                >
                  <Link
                    to={`/chat/${chat.id}`}
                    className="w-full pl-4 pr-10 py-2.5 truncate"
                    onClick={() => setIsSideBarOpen(false)}
                  >
                    {chat.title || 'Untitled Chat'}
                  </Link>
                  <button
                    onClick={() => handleDelete({ id: chat.id })}
                    className="absolute right-2 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-800/50 transition-all duration-200"
                    title="Delete conversation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-zinc-600 text-xs px-2 italic py-2">
                No active conversations
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900 mt-4">
        <p className="text-zinc-300 text-sm leading-relaxed">
          Your AI studyspace for intelligent conversation, lectures, concept clarification
          and intellectual discussions.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
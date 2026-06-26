import { Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import router from "./Router/router"
import { ConversationsProvider } from "./context/features/chat/ConversationsProvider"
import CurrentConversationIdProvider from "./context/features/chat/currentConversationIdProvider"
import { SideBarOpenProvider } from "./context/features/chat/SideBarOpenProvider"

export function App_Layout() {
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

function App() {
  
    return(
        <CurrentConversationIdProvider>
         <ConversationsProvider>
            <SideBarOpenProvider>
            <RouterProvider router={router} />
            </SideBarOpenProvider>
        </ConversationsProvider>
        </CurrentConversationIdProvider>
    )
}

export default App

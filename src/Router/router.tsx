import {createBrowserRouter} from "react-router-dom";
import { App_Layout } from "../App";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
    {
        element: <App_Layout />,
        children: [
            {path: '/', element: <ChatPage />}
        ]
    }
])

export default router;
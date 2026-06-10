import {createBrowserRouter} from "react-router-dom";
import { App_Layout } from "../App";
import ChatPage from "../pages/ChatPage";
import Signup from "../pages/SignUp";
import Login from "../pages/LogIn";
import ProtectedRoute from "../components/features/auth/ProtectedRoute";

const router = createBrowserRouter([
    {
        element: <App_Layout />,
        children: [
            {path: '/chat', element: <ProtectedRoute><ChatPage /></ProtectedRoute>}, 
            {path: '/chat/:id', element: <ProtectedRoute><ChatPage /></ProtectedRoute>}, 
            {path: '/auth/register', element: <Signup />},
            {path: '/auth/login', element: <Login />},
        ]
    }
])

export default router;
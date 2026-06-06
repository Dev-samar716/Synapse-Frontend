import {createBrowserRouter} from "react-router-dom";
import { App_Layout } from "../App";
import ChatPage from "../pages/ChatPage";
import Signup from "../pages/SignUp";
import Login from "../pages/LogIn";
import ProtectedRoute from "../components/features/auth/ProtectedRoute";
import VerifyOTP from "../pages/VerifyOtpPage";
import ProtectedVerifyOtpPage from "../components/features/auth/ProtectVerifyOtpPage";

const router = createBrowserRouter([
    {
        element: <App_Layout />,
        children: [
            {path: '/', element: <ProtectedRoute><ChatPage /></ProtectedRoute>}, 
            {path: '/auth/register', element: <Signup />},
            {path: '/auth/login', element: <Login />},
            {path: '/auth/verify-otp/:email', element: <ProtectedVerifyOtpPage><VerifyOTP /></ProtectedVerifyOtpPage>}
        ]
    }
])

export default router;
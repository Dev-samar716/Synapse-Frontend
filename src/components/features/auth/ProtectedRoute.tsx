import type { ReactNode } from "react"
import { useTokenVerificationLoading } from "../../../hooks/features/auth/useTokenVerificationLoading"
import useAuth from "../../../hooks/features/auth/useAuth";
import Spinner from "../../spinner";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children} : {children : ReactNode}) => {
    const { isTokenVerificationLoading } = useTokenVerificationLoading();
    const { userInfo } = useAuth();

    if(isTokenVerificationLoading) return <Spinner />

    if(!userInfo) return <Navigate to="/auth/register" />

    return children;
}

export default ProtectedRoute;
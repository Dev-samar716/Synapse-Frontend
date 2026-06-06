import { Navigate } from "react-router-dom";
import usePendingSignup from "../../../hooks/features/auth/usePendingSignup"


const ProtectedVerifyOtpPage = ({children} : {children : React.ReactNode}) => {
    const { pendingSignup } = usePendingSignup();

    if(!pendingSignup.email) return <Navigate to="/auth/register" replace />

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedVerifyOtpPage;
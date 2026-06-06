import type { UserInfo } from "../../../types/AuthTypes";
import router from "../../../Router/router";
import signupAPI from "../../../services/features/auth/signupAPI";
import verifyOtpAPI from "../../../services/features/auth/verifyOtpAPI";

interface PendingSignup {
    username: string;
    email: string;
    password: string;
}

interface Parameters {
    email: string;
    otpCode: string;
    pendingSignup: PendingSignup;
    setPendingSignup: React.Dispatch<React.SetStateAction<PendingSignup>>;
    setErrorMessage: (value: string) => void;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

const verifyOtp = async({
    email, otpCode, pendingSignup, setPendingSignup, setErrorMessage,
    setUserInfo
} : Parameters) => {
     try {
           const response = await verifyOtpAPI({email, otp_code: otpCode, setErrorMessage});
           const username = pendingSignup.username;
           const password = pendingSignup.password;
           if(response?.success) {
              try {
                const data = await signupAPI({email, username, password, setErrorMessage});
    
                if(data) {
                  setUserInfo(data.userInfo)
                  router.navigate("/")
                  setPendingSignup({
                    username: "",
                    email: "",
                    password: ""
                  })
                }
              } catch(error) {
                console.log(error)
              }
           }
    
         } catch(error) {
        console.log(error)
      }
}

export default verifyOtp
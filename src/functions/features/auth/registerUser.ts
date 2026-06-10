import type { Dispatch, SetStateAction } from "react";
import signupAPI from "../../../services/features/auth/signupAPI"
import type { UserInfo } from "../../../types/AuthTypes";
import router from "../../../Router/router";


interface Parameters {
    email: string,
    username: string,
    password: string,
    setErrorMessage: (vale: string) => void,
    setUserInfo: Dispatch<SetStateAction<UserInfo | null>>
}

const registerUser = async({email, username, password, setErrorMessage, setUserInfo} : Parameters) => {
     try {
        const data = await signupAPI({email, username, password, setErrorMessage});

        if(data.success) {
            setUserInfo(data.userInfo)
            router.navigate("/chat");
        }
     } catch(error) {
         console.log(error)
     }
}

export default registerUser;
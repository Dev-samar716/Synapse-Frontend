import router from "../../../Router/router";
import logoutAPI from "../../../services/features/auth/logoutAPI"
import type { UserInfo } from "../../../types/AuthTypes";


interface Parameters {
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>
}

const logout = async({setUserInfo} : Parameters) => {
    try {
        const response = await logoutAPI();

        if(response.success) {
           setUserInfo(null);
           router.navigate("/auth/login")
        }
    } catch (error) {
        console.log(error)
    }
}

export default logout;
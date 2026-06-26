

interface Parameters {
    email: string,
    username: string,
    password: string,
    setErrorMessage: (value: string) => void;
}

const signupAPI = async({email, username, password, setErrorMessage} : Parameters) => {
    const api_url = import.meta.env.VITE_API_URL
    try {
        const response = await fetch(`${api_url}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            })
        })

        const data = await response.json();

        if(!response.ok) {
            return setErrorMessage(data.message || "Failed to sign up!");
        }

        return data;
    } catch (error) {
        console.error("Error during signup:", error);
    }
}

export default signupAPI;
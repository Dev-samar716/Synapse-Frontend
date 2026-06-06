

interface Parameters {
    username: string,
    password: string,
    email: string,
    setErrorMessage: (value: string) => void;
}

const loginAPI = async({username, password, email, setErrorMessage} : Parameters) => {
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            })
        })

        const data = await response.json();

        if(!response.ok) {
            return setErrorMessage(data.message || "Failed to login!");
        }

        return data;
    } catch (error) {
        console.error("Error during login:", error);
    }
}

export default loginAPI;
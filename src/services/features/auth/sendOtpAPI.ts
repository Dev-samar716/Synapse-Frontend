

interface Parameters {
    email: string,
    setErrorMessage: (value: string) => void;
}

const sendOtpAPI = async({email, setErrorMessage} : Parameters) => {
    try {
        const response = await fetch("https://synapse-backend-3.onrender.com/auth/sendOtp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })

        const data = await response.json();

        if(!response.ok) {
            return setErrorMessage(data.message || "Failed to send OTP");
        }

        return data;
    } catch (error) {
        console.error("Error sending OTP:", error);
    }
}

export default sendOtpAPI;
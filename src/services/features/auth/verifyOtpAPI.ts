

interface Parameters {
    email: string,
    otp_code: string,
    setErrorMessage: (value: string) => void;
}

const verifyOtpAPI = async({email, otp_code, setErrorMessage} : Parameters) => {
     try {
        const response = await fetch("http://localhost:3000/auth/verifyOtp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                otp_code: otp_code
            })
        })

        const data = await response.json();
         
        if(!response.ok) {
            return setErrorMessage(data.message || "Failed to verify OTP");
        }

        return data;
    } catch(error) {
        console.log(error)
    }
}

export default verifyOtpAPI;
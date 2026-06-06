

const verifyTokenAPI = async() => {
    try {
        const response = await fetch('http://localhost:3000/auth/verify', {
            method: "GET",
            credentials: "include"
        })

        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

export default verifyTokenAPI;
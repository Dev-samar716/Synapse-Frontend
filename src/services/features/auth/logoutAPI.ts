

const logoutAPI = async() => {
    try {
        const response = await fetch('https://synapse-backend-3.onrender.com/auth/logout', {
            method: "GET",
            credentials: "include"
        })

        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

export default logoutAPI;
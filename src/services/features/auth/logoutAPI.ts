

const logoutAPI = async() => {
    try {
        const response = await fetch('http://localhost:3000/auth/logout', {
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


const verifyTokenAPI = async() => {
    const api_url = import.meta.env.VITE_API_URL
    try {
        const response = await fetch(`${api_url}/auth/verify`, {
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
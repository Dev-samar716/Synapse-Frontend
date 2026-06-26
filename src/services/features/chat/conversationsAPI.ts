

const conversationsAPI = async() => {
   const api_url = import.meta.env.VITE_API_URL;

   try {
    const response = await fetch(`${api_url}/chat/conversations`, {
        method: "GET",
        credentials: "include"
    })

    const data = await response.json();

    return data;
   } catch(error) {
    console.log(error);
    throw error
   }
}

export default conversationsAPI
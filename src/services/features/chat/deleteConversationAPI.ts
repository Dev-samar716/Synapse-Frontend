

interface Parameters {
    id: string
}

const deleteConversationAPI = async({id} : Parameters) => {
     const api_url = import.meta.env.VITE_API_URL;
     try {
        const response = await fetch(`${api_url}/chat/deleteConversation/${id}`, {
            method: "DELETE",
            credentials: "include"
        });
         const data = await response.json();

         if(!response.ok) {
            throw new Error(data.message)
        }

        return data;
     } catch(error) {
        console.log(error);
        throw error;
     }
}

export default deleteConversationAPI;


interface Parameters {
    currentConversationId: string | null;
    setErrorMessage: (value: string) => void
}

const loadConversationAPI = async({currentConversationId, setErrorMessage} : Parameters) => {
    const api_url = import.meta.env.VITE_API_URL;
    
     try {
        const response = await fetch(`${api_url}/chat/loadConversation/${currentConversationId}`, {
            method: "GET",
            credentials: 'include',
        })

        const data = await response.json();

        if(!response.ok) {
            return setErrorMessage(data.message);
        }

        return data;
     } catch(error) {
        console.log(error);
     }
}

export default loadConversationAPI;
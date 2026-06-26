import type { Content } from "../../../types/ContentType";

interface Props {
    contents: Content[];
    currentConversationId: string | null
}

const callGroqAPI = async({contents, currentConversationId} : Props) => {
    const api_url = import.meta.env.VITE_API_URL;
    try {
        const response = await fetch(`${api_url}/chat/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                contents: contents,
                currentConversationId: currentConversationId,
            })
        })

        const data = await response.json();

        if(!response.ok) {
            console.log(data.message);
        }

        return data;
    } catch(error) {
        console.log(error);
    }
}

export default callGroqAPI;
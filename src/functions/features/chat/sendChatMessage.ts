import type { Dispatch, SetStateAction } from "react";
import type { Content } from "../../../types/ContentType";
import callGroqAPI from "../../../services/features/chat/callGroqAPI";

interface Parameters {
    contents: Content[]
    setContents: Dispatch<SetStateAction<Content[]>>;
    user_id: number;
}

const sendChatMessage = async({contents, setContents, user_id} : Parameters) => {
    try {
        const data = await callGroqAPI({contents, user_id});

        if(data?.success && data?.data?.candidates?.[0]?.content) {
            
            const newModelMessage = data.data.candidates?.[0].content;
            
            setContents(prev => [...prev, newModelMessage]);
        } else {
            console.error("Invalid response from Groq:", data);
        }
    } catch(error) {
       console.error("Error in sendChatMessage:", error);
    }
}

export default sendChatMessage;
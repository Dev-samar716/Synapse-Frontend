import type { Dispatch, SetStateAction } from "react";
import type { Content } from "../../../types/ContentType";
import callGroqAPI from "../../../services/features/chat/callGroqAPI";
import router from "../../../Router/router";

interface Parameters {
    contents: Content[];
    setContents: Dispatch<SetStateAction<Content[]>>;
    currentConversationId: string | null;
    setCurrentConversationId: (value: string | null) => void;
}

const sendChatMessage = async({contents, setContents, currentConversationId, setCurrentConversationId} : Parameters) => {
    try {
        const data = await callGroqAPI({contents, currentConversationId});

        if(data?.success && data?.data?.candidates?.[0]?.content) {
            
            const newModelMessage = data.data.candidates?.[0].content;
            
            setContents(prev => [...prev, newModelMessage]);
            console.log(newModelMessage);
             
            setCurrentConversationId(String(data.conversationId))

            router.navigate(`/chat/${data.conversationId}`)
        } else {
            console.error("Invalid response from Groq:", data);
        }
    } catch(error) {
       console.error("Error in sendChatMessage:", error);
    }
}

export default sendChatMessage;
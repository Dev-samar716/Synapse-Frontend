import type { Dispatch, SetStateAction } from "react";
import type { Content } from "../../../types/ContentType";
import callDeepSeekAPI from "../../../services/features/chat/callDeepSeekAPI";

interface Parameters {
    contents: Content[]
    setContents: Dispatch<SetStateAction<Content[]>>;
}

const sendChatMessage = async({contents, setContents} : Parameters) => {
    try {
        const data = await callDeepSeekAPI({contents});

        if(data?.success && data?.data?.candidates?.[0]?.content) {
            
            const newModelMessage = data.data.candidates?.[0].content;
            
            setContents(prev => [...prev, newModelMessage]);
        } else {
            console.error("Invalid response from Gemini:", data);
        }
    } catch(error) {
       console.error("Error in sendChatMessage:", error);
    }
}

export default sendChatMessage;
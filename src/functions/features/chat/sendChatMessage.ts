import type { Dispatch, SetStateAction } from "react";
import type { Content } from "../../../types/ContentType";
import callGeminiAPI from "../../../services/features/chat/callGeminiAPI";

interface Parameters {
    contents: Content[]
    setContents: Dispatch<SetStateAction<Content[]>>;
}

const sendChatMessage = async({contents, setContents} : Parameters) => {
    try {
        const data = await callGeminiAPI({contents});

        if(data.success) {
            setContents(prev => [...prev, data.data.candidates[0].content]);
        }
    } catch(error) {
       console.log(error);
    }
}

export default sendChatMessage;
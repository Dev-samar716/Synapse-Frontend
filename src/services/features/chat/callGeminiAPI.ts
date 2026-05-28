import type { Content } from "../../../types/ContentType";

interface Props {
    contents: Content[];
}

const callGeminiAPI = async({contents} : Props) => {
    try {
        const response = await fetch('http://localhost:3000/chat/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents
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

export default callGeminiAPI;
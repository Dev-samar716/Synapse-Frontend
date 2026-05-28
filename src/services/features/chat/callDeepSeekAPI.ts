import type { Content } from "../../../types/ContentType";

interface Props {
    contents: Content[];
}

const callDeepSeekAPI = async({contents} : Props) => {
    try {
        const response = await fetch('https://synapse-backend-3.onrender.com/chat/', {
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

export default callDeepSeekAPI;
import type { Content } from "../../../types/ContentType";

interface Props {
    contents: Content[];
    user_id: number;
}

const callGroqAPI = async({contents, user_id} : Props) => {
    try {
        const response = await fetch('https://synapse-backend-3.onrender.com/chat/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents,
                user_id: user_id
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
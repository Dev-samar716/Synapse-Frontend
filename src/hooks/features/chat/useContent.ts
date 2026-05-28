import { useContext } from "react"
import ContentContext from "../../../context/features/chat/ContentContext"


const useContent = () => {
    const context = useContext(ContentContext);

    if(!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }

    const {contents, setContents} = context;

    return {contents, setContents};
}

export default useContent;
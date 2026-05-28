import { useState } from "react";
import ContentContext from "./ContentContext";
import type { Content } from "../../../types/ContentType";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const ContentProvider = ({children} : Props) => {
    const [contents, setContents] = useState<Content[]>([]);

    return(
        <ContentContext.Provider value={{contents, setContents}}>
         {children}
        </ContentContext.Provider>
    )
}

export default ContentProvider;
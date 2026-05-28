import { useState } from "react";
import responseLoadingContext from "./ResponseLoadingContext";

const ResponseLoadingProvider = ({children} : {children : React.ReactNode}) => {
    const [responseLoading, setResponseLoading] = useState<boolean>(false);

    return (
        <responseLoadingContext.Provider value={{responseLoading, setResponseLoading}}>
            {children}
        </responseLoadingContext.Provider>
    )
}

export default ResponseLoadingProvider;
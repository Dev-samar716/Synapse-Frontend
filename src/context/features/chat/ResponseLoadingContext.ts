import { createContext } from "react"


export interface LoadingStateType {
    responseLoading: boolean,
    setResponseLoading: (value: boolean) => void
}

const responseLoadingContext = createContext<LoadingStateType | undefined>(undefined);

export default responseLoadingContext;
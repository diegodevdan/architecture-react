import {createContext} from "react";
import {initStateProps} from "../interfaces";

interface InformationContextProps {
    state: initStateProps
    addValue: (prop:string, value:string) => void
}

export const InformationContext = createContext({} as InformationContextProps)
import {useContext} from "react";
import {InformationContext} from "../../context/InformationContext";


export const useInformation = () => {

    const {state, addValue} = useContext(InformationContext);

    return {
        state,
        addValue
    }
}
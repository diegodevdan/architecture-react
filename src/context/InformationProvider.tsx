import React, {FC, useContext, useReducer} from 'react';
import {informationReducer} from "./informationReducer";
import {InformationProviderProps, initStateProps} from "../interfaces";
import {InformationContext} from "./InformationContext";

const INIT_STATE:initStateProps = {
    name: '',
    lastname: '',
    birthDate: '',
    street: '',
    state: ''
}

export const InformationProvider:FC<InformationProviderProps> = ({
    children
}) => {

    const {state:InitState} = useContext(InformationContext);
    const [state, dispatch] = useReducer(informationReducer, INIT_STATE);

    const addValue = (prop:string, value:string) => {
        dispatch({
            type: 'fillValues',
            payload: {prop, value}
        })
        addValue(prop, value);
    }

    return (
        <InformationContext.Provider
            value={{
                addValue,
                state
            }}
        >
            {children}
        </InformationContext.Provider>
    );
};

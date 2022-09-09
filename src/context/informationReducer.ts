import {initStateProps} from "../interfaces";

type ActionTypes =  {type: 'fillValues', payload: { prop:string, value: string }};

export const informationReducer = (state:initStateProps, action:ActionTypes) => {
    switch (action.type) {
        case "fillValues":
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        default:
            return state
    }
}
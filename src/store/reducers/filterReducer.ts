import {ConditionAction, ConditionActionTypes, ConditionState} from "../types/condition";

const initialState: ConditionState = {
    condition: null,
    error: null
}

export const filterReducer = (state = initialState, action : ConditionAction): ConditionState  => {
    switch (action.type) {
        case ConditionActionTypes.FILTER_TYPE_BODY:
            return {condition: "body", error: null};

        case ConditionActionTypes.FILTER_TYPE_HANDS:
            return {condition: "hands", error: null};

        case ConditionActionTypes.FILTER_PRICE_ASCENDING:
            return {condition: "price/+", error: null};

        case ConditionActionTypes.FILTER_PRICE_DESCENDING:
            return {condition: "price/-", error: null};

        case ConditionActionTypes.FILTER_NAME_ASCENDING:
            return {condition: "name/+", error: null};

        case ConditionActionTypes.FILTER_NAME_DESCENDING:
            return {condition: "name/-", error: null};

        case ConditionActionTypes.GIVE_ERROR:
            return {condition: null, error: action.payload}
        default:
            return state
    }
}

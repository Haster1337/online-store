export interface ConditionState {
    condition: string | null,
    error: string | null
}

export enum ConditionActionTypes {
    FILTER_TYPE_BODY = "FILTER_TYPE_BODY",
    FILTER_TYPE_HANDS = "FILTER_TYPE_HANDS",
    FILTER_PRICE_ASCENDING = "FILTER_PRICE_ASCENDING",
    FILTER_PRICE_DESCENDING = "FILTER_PRICE_DESCENDING",
    FILTER_NAME_ASCENDING = "FILTER_NAME_ASCENDING",
    FILTER_NAME_DESCENDING = "FILTER_NAME_DESCENDING",
    GIVE_ERROR = "GIVE_ERROR"
}

interface ConditionTypeBodyAction {
    type: ConditionActionTypes.FILTER_TYPE_BODY
}

interface ConditionTypeHandsAction {
    type: ConditionActionTypes.FILTER_TYPE_HANDS
}

interface ConditionPriceAscendingAction {
    type: ConditionActionTypes.FILTER_PRICE_ASCENDING
}

interface ConditionPriceDescendingAction {
    type: ConditionActionTypes.FILTER_PRICE_DESCENDING
}

interface ConditionNameAscendingAction {
    type: ConditionActionTypes.FILTER_NAME_ASCENDING
}

interface ConditionNameDescendingAction {
    type: ConditionActionTypes.FILTER_NAME_DESCENDING
}

interface ConditionErrorAction {
    type: ConditionActionTypes.GIVE_ERROR;
    payload: string
}

export type ConditionAction = ConditionTypeBodyAction | ConditionTypeHandsAction | ConditionPriceAscendingAction |
    ConditionPriceDescendingAction | ConditionNameAscendingAction | ConditionNameDescendingAction | ConditionErrorAction;
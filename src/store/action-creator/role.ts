import {Dispatch} from "redux";
import {RoleAction, RoleActionTypes} from "../types/role";

export const giveAdminRole = () => {
    return (dispatch: Dispatch<RoleAction>) => {
        try {
           dispatch({type: RoleActionTypes.GIVE_ADMIN});
        } catch (e) {
            dispatch({type: RoleActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}

export const giveUserRole = () => {
    return (dispatch: Dispatch<RoleAction>) => {
        try {
            dispatch({type: RoleActionTypes.GIVE_USER})
        } catch (e) {
            dispatch({type: RoleActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}


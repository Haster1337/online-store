import {RoleAction, RoleActionTypes, RoleState} from "../types/role";

const initialState: RoleState = {
    role: "User",
    error: null
}

export const roleReducer = (state = initialState, action: RoleAction): RoleState => {
    switch (action.type){
        case RoleActionTypes.GIVE_USER:
            return {role: "User",error: null};
        case RoleActionTypes.GIVE_ADMIN:
            return {role: "Admin", error: null};
        case RoleActionTypes.GIVE_ERROR:
            return {role: "User", error: action.payload}
        default:
            return state;
    }

}
export interface RoleState {
    role: string,
    error: null | string
}

export enum RoleActionTypes {
    GIVE_ADMIN = "GIVE_ADMIN",
    GIVE_USER = "GIVE_USER",
    GIVE_ERROR = "GIVE_ERROR"
}


interface RoleUserAction {
    type: RoleActionTypes.GIVE_USER
}

interface RoleAdminAction {
    type: RoleActionTypes.GIVE_ADMIN
}


interface RoleErrorAction {
    type: RoleActionTypes.GIVE_ERROR;
    payload: string
}


export type RoleAction = RoleUserAction | RoleAdminAction | RoleErrorAction;
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as RoleActionCreator from "../store/action-creator/role"

export const useRoleActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(RoleActionCreator, dispatch);
}
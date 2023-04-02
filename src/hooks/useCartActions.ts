import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CartActionCreators from "../store/action-creator/cart"

export const useCartActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CartActionCreators, dispatch);
}
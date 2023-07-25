import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ProductsActionCreator from "../store/action-creator/products"

export const useProductActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ProductsActionCreator, dispatch);
}
import {ProductsAction, ProductsActionTypes, ProductsState} from "../types/products";
import {Item} from "../../components/types/item";

const initialState: ProductsState = {
    products: null,
    isError: false,
    isLoading: false,
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type){
        case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
            return {products: action.payload, isError: false, isLoading: false};
        case ProductsActionTypes.GET_PRODUCTS:
            return {products: null, isError: false, isLoading: action.payload}
        case ProductsActionTypes.CREATE_PRODUCT:
            const products: Item[] | undefined = state.products?.slice();
            products?.push(action.payload);
            return {products: products, isError: false, isLoading: false}
        case ProductsActionTypes.DELETE_PRODUCT:
            return {
                products: state.products?.filter(product => product.code !== action.payload),
                isError: false,
                isLoading: false
            }
        case ProductsActionTypes.GIVE_ERROR:
            return {products: null, isError: true, isLoading: false, message: action.payload}
        default:
            return state;
    }

}
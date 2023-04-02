import {CartAction, CartActionTypes, CartState} from "../types/cart";

const initialState: CartState = {
    products: null,
    isInCart: false,
    error: null
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type){
        case CartActionTypes.GET_PRODUCT:
            return {products: state.products, isInCart: true, error: null}
        case CartActionTypes.ADD_PRODUCT:
            let products = state.products?.slice();
            if(typeof products === "undefined"){
                products = [];
            }
            products?.push(action.payload);
            return {products: products, isInCart: true, error: null};
        case CartActionTypes.DELETE_PRODUCT:
            const filteredProducts = state.products?.filter(product => product.code !== action.payload.code)
            return {products: filteredProducts,isInCart: false, error: null};
        case CartActionTypes.IF_IN_CART_ACTION:
            return  {products: state.products, isInCart: true, error: null}
        case CartActionTypes.GIVE_ERROR:
            return {products: null,isInCart: false, error: action.payload}
        default:
            return state;
    }

}
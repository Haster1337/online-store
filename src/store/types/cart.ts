import {Item} from "../../components/types/item";

export interface CartState {
    products: null | undefined | Item[],
    isInCart: boolean,
    error: null | string
}

export enum CartActionTypes {
    GET_PRODUCT = "GET_PRODUCTS",
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    IF_IN_CART_ACTION = "IF_IN_CART_ACTION",
    GIVE_ERROR = "GIVE_ERROR"
}

interface CartGetProductsAction {
    type: CartActionTypes.GET_PRODUCT
}

interface CartAddProductAction {
    type: CartActionTypes.ADD_PRODUCT,
    payload: Item
}

interface CartDeleteProductAction {
    type: CartActionTypes.DELETE_PRODUCT,
    payload: Item
}

interface IfInCartAction {
    type: CartActionTypes.IF_IN_CART_ACTION,
}


interface CartErrorAction {
    type: CartActionTypes.GIVE_ERROR;
    payload: string
}



export type CartAction = CartGetProductsAction | CartAddProductAction | CartDeleteProductAction | CartErrorAction | IfInCartAction;
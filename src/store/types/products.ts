import {Item} from "../../components/types/item";

export interface ProductsState {
    products: undefined | null | Item[],
    isError: boolean,
    isLoading: boolean,
    message?: string
}

export enum ProductsActionTypes {
    GET_PRODUCTS = "GET_PRODUCTS",
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
    GIVE_ERROR = "GIVE_ERROR",
    CREATE_PRODUCT = "CREATE_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT"
}


interface ProductsGetAction {
    type: ProductsActionTypes.GET_PRODUCTS,
    payload: boolean
}

interface ProductsGetSuccessAction {
    type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
    payload: Array<Item>
}

interface ProductCreateAction {
    type: ProductsActionTypes.CREATE_PRODUCT,
    payload: Item
}

interface ProductDeleteAction {
    type: ProductsActionTypes.DELETE_PRODUCT,
    payload: string
}

interface ProductsErrorAction {
    type: ProductsActionTypes.GIVE_ERROR,
    payload: string
}


export type ProductsAction = ProductsGetAction | ProductsGetSuccessAction | ProductCreateAction |
    ProductDeleteAction | ProductsErrorAction;
import axios from "axios";
import items from "../../data/items.json";
import {ProductsAction, ProductsActionTypes} from "../types/products";
import {Dispatch} from "redux";
import {Item} from "../../components/types/item";

export const getProducts = () => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.GET_PRODUCTS, payload: true})
            const response = await axios.get("/api/products");  // берем данные с сервера
            dispatch({type: ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload: response.data})
        } catch (e) {
            // dispatch({type: ProductsActionTypes.GIVE_ERROR, payload: "Произошла ошибка"})
            // добавим хардкод данные по умолчанию
            const products: Array<Item> = items;
            dispatch({type: ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload: products})
        }
    }
}

export const createProduct = (product: Item) => {
    return (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.CREATE_PRODUCT, payload: product})
        } catch (e) {
            dispatch({type: ProductsActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}

export const deleteProduct = (code: string) => {
    return (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.DELETE_PRODUCT, payload: code})
        } catch (e) {
            dispatch({type: ProductsActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}
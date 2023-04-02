import {Dispatch} from "redux";
import {CartAction, CartActionTypes} from "../types/cart";
import {Item} from "../../components/types/item";
import {disableCache} from "@iconify/react";


// в действительности нет необходимости try/catch, потому что мои захардкоженные данные никогда не выдадут ошибку,
// но если предполагаем, что данные будут получаться с сервера, то лучше обезопаситься от краша приложения:)
export const addProductInCart = (item: Item) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            if(item.isInCart){
                dispatch({type: CartActionTypes.IF_IN_CART_ACTION})
            } else{
                dispatch({type: CartActionTypes.ADD_PRODUCT, payload: item})
            }
        } catch (e) {
            dispatch({type: CartActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}

export const deleteProductFromCart = (item: Item) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({type: CartActionTypes.DELETE_PRODUCT, payload: item})
        } catch (e) {
            dispatch({type: CartActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}

export const getProductsFromCart = () => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({type: CartActionTypes.GET_PRODUCT})
        } catch (e) {
            dispatch({type: CartActionTypes.GIVE_ERROR, payload: `Произошла ошибка типа ${e}`})
        }
    }
}


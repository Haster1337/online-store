import {combineReducers} from "redux";
import {roleReducer} from "./roleReducer";
import {filterReducer} from "./filterReducer";
import {productsReducer} from "./productsReducer";
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
    role: roleReducer,
    filter: filterReducer,
    products: productsReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>
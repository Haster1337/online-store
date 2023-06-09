import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
//    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
) );




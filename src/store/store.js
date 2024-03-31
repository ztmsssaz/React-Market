import { legacy_createStore as ceateStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productListReducer, producDetailReducer } from "../reducers/productReducer"
import { addCartReducer } from "../reducers/cartReducer"

const initialState = {
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: producDetailReducer,
    cart: addCartReducer
})
const middleware = [thunk]
const store = ceateStore(reducer, initialState, applyMiddleware(...middleware))

export default store

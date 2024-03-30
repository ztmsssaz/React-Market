
const initialState = {
    products: []
}

export const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {
                loading: true,
                products: []
            }
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                products: action.payload.value
            }
        default:
            return state
    }
}


export const producDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAIL_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'PRODUCT_DETAIL_SUCCESS':
            return {
                loading: false,
                product: action.payload.value
            }
        default:
            return state
    }
}
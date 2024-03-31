const cartItemsFromLocal = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = { cartItems: cartItemsFromLocal };

export const addCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const newItem = action.payload.value;
            const existItem = state.cartItems.find((item, index) => {
                return item.productId == newItem.productId
            })

            if (existItem) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem]
                }
            }
        case 'CART_REMOVE_ITEM':
            const id = action.payload.value

            // The first method
            // const productCartIndex = state.cartItems.findIndex((item, index) => {  
            //     return item.productId === id
            // })
            // state.cartItems.splice(productCartIndex, 1);
            //  in return => * cartItems: [...state.cartItems]
            //  The second method


            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.productId !== id)
            }
        default:
            return { ...state }
    }
}

import { getRequest } from "api"

export const addToCart = (id) => async (dispatch, getState) => {
    try {
        const { data } = await getRequest(`/products/${id}`)
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                value: {
                    productId: data._id,
                    name: data.name,
                    price: data.price,
                    image: data.image
                }
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    } catch (error) {
        console.log(error)
    }

}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: { value: id } });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
import { getRequest } from 'api'


export const productListAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_LIST_REQUEST' })
        const { data } = await getRequest('/products')
        dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: { value: data } })

    } catch (error) {
        console.log(error)
    }
}

export const productDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })
        const { data } = await getRequest(`/products/${id}`)
        dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: { value: data } })

    } catch (error) {
        console.log(error)
    }
}
import { postRequest } from 'api'
import { Navigate } from 'react-router-dom'

export const loginAction = (loginForm) => async (dispatch) => {
    try {
        dispatch({ type: 'REQUEST_LOGIN_SEND' })
        const response = await postRequest('/login', loginForm)
        console.log(response.data)
        if (response.data.token) {
            localStorage.setItem('userData', JSON.stringify(response.data))
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
            { <Navigate to='/' /> }
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILED' })
    }
}
export const logoutAction = () => async (dispatch) => {
    dispatch({ type: 'LOGOUT_SUCCESS' })
    localStorage.removeItem('userData')
    { <Navigate to='/' /> }
}
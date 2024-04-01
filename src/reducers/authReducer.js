const userData = localStorage.getItem('userData') ?
    JSON.parse(localStorage.getItem('userData')) : {};

const initialState = {
    userName: userData.username ? userData.username : '',
    name: userData.name ? userData.name : '',
    token: userData.name ? userData.token : '',
    loading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN_SEND':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                loading: false,
                token: action.payload.token,
                name: action.payload.name,
                userName: action.payload.username
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                loading: false,
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                token: '',
                name: '',
                userName: ''
            }
        default: return state
    }
}
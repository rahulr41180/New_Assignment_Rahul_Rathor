
const initialState = {
    token: localStorage.getItem('reqresusertoken') || null,
    registerStatus : false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS' : 
            return { ...state, registerStatus : true, error : null  };
        case 'REGISTER_FAIL' : 

            return { ...state, error : action.payload, registerStatus : false };
        case 'LOGIN_SUCCESS':
            return { ...state, token: action.payload, error: null, registerStatus : false };
        case 'LOGIN_FAIL':
            return { ...state, error: action.payload, registerStatus : false };
        case 'LOGOUT':
            return { ...state, token: null, registerStatus : false };
        default:
            return state;
    }
};
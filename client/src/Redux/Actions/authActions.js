
import authApi from "../../config/User/auth.api";

const login = (email, password) => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await authApi.LoginUserProfile({ email : email, password : password })
            // console.log('data login:', data)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data.token // Assuming the token is in the response
            });

            localStorage.setItem('reqresusertoken', data.token);
            resolve(data);
        } catch (error) {
            // console.log('error login:', error)
            dispatch({
                type: 'LOGIN_FAIL',
                payload: error.response.data.error
            });
            reject(error);
        }
    })
};

const register = (email, password) => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await authApi.RegisterUserProfile({ email : email, password : password })
            // console.log('data register:', data)
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: data.token
            });
            resolve(data);
        } catch (error) {
            // console.log('error register:', error)
            dispatch({
                type: 'REGISTER_FAIL',
                payload: error.response.data.error
            });
            reject(error);
        }
    })
};

const logout = () => dispatch => {
    localStorage.removeItem('reqresusertoken');
    dispatch({ type: 'LOGOUT' });
};

// eslint-disable-next-line
export default {
    login,
    register,
    logout
}
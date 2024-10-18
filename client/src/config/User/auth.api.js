
import { reqResAxiosInstance } from "../apiInterceptor";

const RegisterUserProfile = async (data) => {
    try {
        const response = await reqResAxiosInstance.post(`/api/register`, data);
        return response;
    } catch(error) {
        // console.log('error RegisterUserProfile:', error)
        throw error;
    }
}


const LoginUserProfile = async (data) => {
    try {
        const response = await reqResAxiosInstance.post(`/api/login`, data);
        return response;
    } catch(error) {
        // console.log('error LoginUserProfile:', error)
        throw error;
    }
}

// eslint-disable-next-line
export default {
    RegisterUserProfile,
    LoginUserProfile
}
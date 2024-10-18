
import { reqResAxiosInstance } from "../apiInterceptor";

const GetUsersList = async (page) => {
    try {
        const response = await reqResAxiosInstance.get(`/api/users?page=${page}`);
        return response;
    } catch(error) {
        throw error;
    }
}


const GetSingleUserProfile = async (id) => {
    try {
        const response = await reqResAxiosInstance.get(`/api/users/${id}`);
        return response;
    } catch(error) {
        throw error;
    }
}

// eslint-disable-next-line
export default {
    GetUsersList,
    GetSingleUserProfile
}
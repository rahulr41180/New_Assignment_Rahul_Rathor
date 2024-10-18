
import usersApi from "../../config/User/users.api";

const loadAllUsers = (page = 1) => async (dispatch, getState) => {
    try {
        const { data } = await usersApi.GetUsersList(page);
        // console.log('data loadAllUsers:', data)
        if(data?.data.length > 0) {
            dispatch({
                type : 'USERS_FETCHED_SUCCESS',
                payload : {
                    totalUser : data?.total,

                    userData : data?.data
                }
            })
        }
    } catch(error) {
        // console.log('error loadAllUsers:', error)
        dispatch({
            type : 'USERS_FETCH_FAIL',
            payload : error.response.data.error
        })
        throw error;
    }
};

// eslint-disable-next-line
export default {
    loadAllUsers
}
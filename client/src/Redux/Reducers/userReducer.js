
const initialState = {
    users: [],
    totalUser : 1,
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_FETCHED_SUCCESS':
            return { ...state, users: action.payload.userData, totalUser : action.payload.totalUser, loading: false };
        case 'USERS_FETCH_FAIL':
            return { ...state, error: action.payload, loading: false };
        case 'LOADING':
            return { ...state, loading: true };
        default:
            return state;
    }
};
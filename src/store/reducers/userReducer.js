import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants';

const initialState = {
    loading: false,
    accessToken: null,
    error: null
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case USER_LOGIN:
        return { loading: true, error: null };

    case USER_LOGIN_SUCCESS:
        return { loading: false, accessToken: action.payload };

    case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };

    case USER_LOGOUT:
        return initialState;

    default:
        return state;
    }
};

export default userReducer;

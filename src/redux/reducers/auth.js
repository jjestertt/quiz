import {AUTH_SUCCESS, LOGOUT} from "../actions/actionTypes";

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: {
            return {
                ...state,
                token: action.token
            }
        }
        case LOGOUT: {
            return {
                ...state,
                token: null
            }
        }
        default :{
            return state;
        }
    }
}

export default authReducer;
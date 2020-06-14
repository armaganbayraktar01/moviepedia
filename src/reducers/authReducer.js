// moviesReducer

import { 
    LOGIN_USER_PENDING, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED, 
    LOGOUT_USER_PENDING, LOGOUT_USER_FULFILLED, LOGOUT_USER_REJECTED, 
} from '../actions/authReducerAction';


const initialState = {
    user: '',
    isAuthenticated: false,
    error: false,
    errorMessage: '',
}

export default (state = initialState, action) => 
{
    switch (action.type)
    {
        // LOGIN_USER
        case LOGIN_USER_PENDING:
            return {
                ...state,
                isAuthenticated: false
            };

        case LOGIN_USER_FULFILLED:
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };

        case LOGIN_USER_REJECTED:
            return {
                ...state,
                user: '',
                isAuthenticated: false,
                error: true,
                errorMessage: action.payload
            };

        // LOGOUT_USER
        case LOGOUT_USER_PENDING:
            return {
                ...state
            };

        case LOGOUT_USER_FULFILLED:
            return {
                ...state,
                user: '',
            };

        case LOGOUT_USER_REJECTED:
            return {
                ...state
            };
        
        default:
            return state;
        }
    }

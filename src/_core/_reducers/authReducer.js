
import { 
    LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,
    LOGOUT
} from '../_actions/authAction';

/** Jwt Decode */
import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('jwtToken');


const user = token ? jwt_decode(token) : "";

const initialState = user ? { loginStatus: true, user } : {};


export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case LOGIN_PENDING:
            return {
                //...state,
                loginStatus: false,
                loginPending: true,
                user: {},
            };

        case LOGIN_FULFILLED:
            return {
                //...state,
                loginStatus: true,
                loginPending: false,
                user: action.payload,
            };

        case LOGIN_REJECTED:
            return {
                //...state,
                loginStatus: false,
                loginPending: false,
                user: {}
            };

        // LOGOUT_USER
        case LOGOUT:
            return {
                loginStatus: false,
                user: {},
            };

        default:
            return state;
    }
}

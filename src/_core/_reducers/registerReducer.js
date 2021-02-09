
import { 
    REGISTER_PENDING, REGISTER_FULFILLED, REGISTER_REJECTED
} from '../_actions/authAction';

//let user = JSON.parse(localStorage.getItem('user'));
const initialState = {};


export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case REGISTER_PENDING:
            return {
                //...state,
                registerStatus: false,
                registerPending: true
            };

        case REGISTER_FULFILLED:
            return {
                //...state,
                registerStatus: true,
                registerPending: false
                
            };

        case REGISTER_REJECTED:
            return {
                // ...state,
                registerStatus: false,
                registerPending: false
            };

        default:
            return state;
    }
}

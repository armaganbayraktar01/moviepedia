// personsReducer

import { 
    ADD_PERSON_PENDING, ADD_PERSON_FULFILLED, ADD_PERSON_REJECTED, 
    UPDATE_PERSON_PENDING, UPDATE_PERSON_FULFILLED, UPDATE_PERSON_REJECTED, 
    FETCH_EDIT_PERSON_PENDING, FETCH_EDIT_PERSON_FULFILLED, FETCH_EDIT_PERSON_REJECTED
} from '../_actions/addPersonAction';


const initialState = {
    fetching: false,
    done: false,
    error: {},
    editButtonActive: true,
    selectPerson: {
        fetching : false,
        editButtonActive: false
    }
}

export default (state = initialState, action) => 
{
    switch (action.type)
    {
        // ADD_PERSON
        case ADD_PERSON_PENDING:
            return {
                ...state,
                fetching: true,

            };

        case ADD_PERSON_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };

        case ADD_PERSON_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        // UPDATE_PERSON
        case UPDATE_PERSON_PENDING:
            return {
                ...state,
                fetching: true,

            };

        case UPDATE_PERSON_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };

        case UPDATE_PERSON_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        
        // FETCH_EDIT_PERSON
        case FETCH_EDIT_PERSON_PENDING:
            return {
                ...state,
                selectPerson: {
                    fetching: true,
                    editButtonActive: true
                }
            };

        case FETCH_EDIT_PERSON_FULFILLED:
            return {
                ...state,
                selectPerson: {
                    ...action.payload,
                    fetching: false,
                    editButtonActive: true
                }
            };

        case FETCH_EDIT_PERSON_REJECTED:
            return {
                ...state,
                selectPerson: {
                    fetching: false
                 } 

            };

        default:
            return state;
        }
    }
 
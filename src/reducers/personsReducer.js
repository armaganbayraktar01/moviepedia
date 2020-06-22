import {
    FETCH_PERSONS_PENDING, FETCH_PERSONS_FULFILLED, FETCH_PERSONS_REJECTED,
    FETCH_DETAIL_PERSON_PENDING, FETCH_DETAIL_PERSON_FULFILLED, FETCH_DETAIL_PERSON_REJECTED,
    DELETE_PERSON_PENDING, DELETE_PERSON_FULFILLED, DELETE_PERSON_REJECTED,
} from '../actions/personsReducerAction';

const initalState = {
    fetching: false,
    personsReducerList: [],
    error: {}
}

export default (state = initalState, action) =>
{
    switch (action.type)
    {
        case FETCH_PERSONS_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_PERSONS_FULFILLED:
            return {
                ...state,
                fetching: false,
                personsReducerList: action.payload
            };
        case FETCH_PERSONS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        // FETCH_DETAIL_MOVIE
        case FETCH_DETAIL_PERSON_PENDING:
            return {
                ...state,
                selectPerson: {
                    fetching: true,
                    //editButtonActive: true
                }
            };

        case FETCH_DETAIL_PERSON_FULFILLED:
            return {
                ...state,
                //selectPerson: action.payload
                selectPerson: {
                    ...action.payload,
                    fetching: false,
                    //editButtonActive: true
                }
            };

        case FETCH_DETAIL_PERSON_REJECTED:
            return {
                ...state,
                selectPerson: {
                    fetching: false
                } 

            };
            // DELETE MOVIE
            case DELETE_PERSON_PENDING:
                return {
                    ...state,
                    fetching: true,
                    editButtonActive: true
                };
    
            case DELETE_PERSON_FULFILLED:
                return {
                    ...state,
                    personsReducerList: state.personsReducerList.filter( item => item._id !== action.payload._id),
                    fetching: false,
                    editButtonActive: true
                };
    
            case DELETE_PERSON_REJECTED:
                return {
                    ...state,
                    error: action.payload
                };
        
        default:
            return state;
    }
}

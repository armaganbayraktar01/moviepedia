import {
    FETCH_PERSONS_PENDING, FETCH_PERSONS_FULFILLED, FETCH_PERSONS_REJECTED
} from '../actions/personsReducerActions';

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
        default:
            return state;
    }
}

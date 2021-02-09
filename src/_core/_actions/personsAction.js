import axios from 'axios';

/** Config */
import { API_BASE } from '../../config/apiBase';

/** FETCH PERSONS */
export const FETCH_PERSONS_PENDING = "FETCH_PERSONS_PENDING";
export const FETCH_PERSONS_FULFILLED = "FETCH_PERSONS_FULFILLED";
export const FETCH_PERSONS_REJECTED = "FETCH_PERSONS_REJECTED";


/** moviesDetailPage fetchDetailMovie() için dataların çekilmesi */
export const FETCH_DETAIL_PERSON_PENDING = "FETCH_DETAIL_PERSON_PENDING";
export const FETCH_DETAIL_PERSON_FULFILLED = "FETCH_DETAIL_PERSON_FULFILLED";
export const FETCH_DETAIL_PERSON_REJECTED = "FETCH_DETAIL_PERSON_REJECTED";

// DELETE PERSON
export const DELETE_PERSON_PENDING = "DELETE_PERSON_PENDING";
export const DELETE_PERSON_FULFILLED = "DELETE_PERSON_FULFILLED";
export const DELETE_PERSON_REJECTED = "DELETE_PERSON_REJECTED";


/** moviesAction */
export const personsAction = {
    fetchPersons,
    FetchPersonDetail,
    onDeletePerson
};




function fetchPersons()
{
    return dispatch =>
    {
        dispatch
        (
            {
                type: "FETCH_PERSONS",
                payload: axios.get(`${API_BASE}/persons`)
                .then(result => result.data)
                //.then(result => console.log(result.data))
            }
        )
    }
}

// FETCH_EDIT_MOVIE
function FetchPersonDetail(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_DETAIL_PERSON",
                payload: axios.get(`${API_BASE}/persons/${id}`)
                .then( result => result.data)
                //.then( result => console.log(result.data))
            }
        )            
    }
}

function onDeletePerson( _id )
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "DELETE_PERSON",
                payload: axios.delete(`${API_BASE}/persons/${_id}`)
                .then( result => Object.assign({}, result, { _id }))
            }
        )            
    }
}
import axios from 'axios';
import { API_BASE } from '../../config/apiBase';

// ADD PERSON
export const ADD_PERSON_PENDING = "ADD_PERSON_PENDING";
export const ADD_PERSON_FULFILLED = "ADD_PERSON_FULFILLED";
export const ADD_PERSON_REJECTED = "ADD_PERSON_REJECTED";

// UPDATE PERSON
export const UPDATE_PERSON_PENDING = "UPDATE_PERSON_PENDING";
export const UPDATE_PERSON_FULFILLED = "UPDATE_PERSON_FULFILLED";
export const UPDATE_PERSON_REJECTED = "UPDATE_PERSON_REJECTED";


// FETCH_EDIT_PERSON
export const FETCH_EDIT_PERSON_PENDING = "FETCH_EDIT_PERSON_PENDING";
export const FETCH_EDIT_PERSON_FULFILLED = "FETCH_EDIT_PERSON_FULFILLED";
export const FETCH_EDIT_PERSON_REJECTED = "FETCH_EDIT_PERSON_REJECTED";


// ADD PERSON
export function onAddPersonSubmit({ 
        fullname, bio, cover, imbd_id, birth, jobs
})
{
    //const jobsObjectID = jobs.value;
    // const jobsObjectID = jobs.map((item => item.value));

    return dispatch => 
    {
        dispatch
        (
            {
                type: "ADD_PERSON",
                payload: axios.post(`${API_BASE}/persons`,
                {
                    fullname, bio, cover, imbd_id, birth, jobs
                })
                .then(result => result.data)
                //.then(result => console.log(result.data))
            }
        )            
    }
}


// UPDATE PERSON
export function onUpdatePersonSubmit({
     _id, fullname, bio, cover, imbd_id, birth, jobs
})
{
    //console.log(birth)
    //const jobsObjectID = jobs.value;
    //const jobsObjectID = jobs.map((item => item));

    return dispatch => 
    {
        dispatch
        (
            {
                type: "UPDATE_PERSON",
                payload: axios.put(`${API_BASE}/persons/${_id}`,
                {
                    fullname, bio, cover, imbd_id, birth, jobs
                })

                .then(result => result.data)
            }
        )            
    }
}

// FETCH_EDIT_PERSON
export function onFetchEditPerson(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_EDIT_PERSON",
                payload: axios.get(`${API_BASE}/persons/${id}`)
                .then( result => result.data)
                //.then( result => console.log(result.data))

            }
        )            
    }
}
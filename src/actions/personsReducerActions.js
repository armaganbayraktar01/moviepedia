import axios from 'axios';

/** API BASE */
import { API_BASE } from '../config/apiBase';


/** FETCH PERSONS */
export const FETCH_PERSONS_PENDING = "FETCH_PERSONS_PENDING";
export const FETCH_PERSONS_FULFILLED = "FETCH_PERSONS_FULFILLED";
export const FETCH_PERSONS_REJECTED = "FETCH_PERSONS_REJECTED";


export function onFetchPersons()
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
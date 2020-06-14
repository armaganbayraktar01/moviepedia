import axios from 'axios';
import { API_BASE } from '../config/apiBase';

// ADD MOVIE
export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_FULFILLED = "ADD_MOVIE_FULFILLED";
export const ADD_MOVIE_REJECTED = "ADD_MOVIE_REJECTED";

// UPDATE MOVIE
export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";


// FETCH_EDIT_MOVIE
export const FETCH_EDIT_MOVIE_PENDING = "FETCH_EDIT_MOVIE_PENDING";
export const FETCH_EDIT_MOVIE_FULFILLED = "FETCH_EDIT_MOVIE_FULFILLED";
export const FETCH_EDIT_MOVIE_REJECTED = "FETCH_EDIT_MOVIE_REJECTED";


// ADD MOVIE
export function onAddMovieSubmit({ 
        title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
        relase_year, genres//, director, cast, images, videos, countries, genres
})
{
    
    /** {value: "5555", label: "label01"} diye gelen datadan sadece value yi object id olarak kullandık */
    const genresObjectID = genres.map((item => item.value))
    //console.log(genresObjectID)

    return dispatch => 
    {

        dispatch
        (
            {
                type: "ADD_MOVIE",
                payload: axios.post(`${API_BASE}/movies`,
                {
                    title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
                    relase_year, genres:genresObjectID //, director, cast, images, videos, countries, genres
                })
                .then(result => result.data)
                //.then(result => console.log(result.data))
            }
        )            
    }
}


// UPDATE MOVIE
export function onUpdateMovieSubmit({
     _id, title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
     relase_year, genres//, director, cast, images, videos, countries, genres
})
{
    const genresObjectID = genres.map((item => item.value))
    return dispatch => 
    {
        dispatch
        (
            {
                type: "UPDATE_MOVIE",
                payload: axios.put(`${API_BASE}/movies/${_id}`,
                {
                    title, titleTr, cover, imbd_id, imbd_rating, synopsis, duration, 
                    relase_year, genres:genresObjectID//, director, cast, images, videos, countries, genres
                })
            }
        )            
    }
}

// FETCH_EDIT_MOVIE
export function onFetchEditMovie(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_EDIT_MOVIE",
                payload: axios.get(`${API_BASE}/movies/${id}`)
                .then( result => result.data)
                //.then( result => console.log(result.data))

            }
        )            
    }
}
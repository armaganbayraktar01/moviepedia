import axios from 'axios';

/** API BASE */
import { API_BASE } from '../config/apiBase';

/** moviesPage fetchMovies() için dataların çekilmesi */
export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

/** moviesDetailPage fetchDetailMovie() için dataların çekilmesi */
export const FETCH_DETAIL_MOVIE_PENDING = "FETCH_DETAIL_MOVIE_PENDING";
export const FETCH_DETAIL_MOVIE_FULFILLED = "FETCH_DETAIL_MOVIE_FULFILLED";
export const FETCH_DETAIL_MOVIE_REJECTED = "FETCH_DETAIL_MOVIE_REJECTED";


/** moviesPage fetchMovies() için dataların çekilmesi */
export function fetchMovies()
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_MOVIE",
                payload: axios.get(`${API_BASE}/movies`)
                .then(result => result.data) // result.data.movies (fetch işleminden gelen result)
            }
        )            
    }
}

// FETCH_EDIT_MOVIE
export function FetchMovieDetail(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_DETAIL_MOVIE",
                payload: axios.get(`${API_BASE}/movies/${id}`)
                .then( result => result.data)
            }
        )            
    }
}
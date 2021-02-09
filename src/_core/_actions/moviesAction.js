import axios from 'axios';

/** Config */
import { API_BASE } from '../../config/apiBase';

/** Helpers */
import { history } from '../../_helpers/history';

/** Alert Actions */
import { alertActions } from './alertAction';

/** moviesPage fetchMovies() için dataların çekilmesi */
export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

/** moviesDetailPage fetchDetailMovie() için dataların çekilmesi */
export const FETCH_DETAIL_MOVIE_PENDING = "FETCH_DETAIL_MOVIE_PENDING";
export const FETCH_DETAIL_MOVIE_FULFILLED = "FETCH_DETAIL_MOVIE_FULFILLED";
export const FETCH_DETAIL_MOVIE_REJECTED = "FETCH_DETAIL_MOVIE_REJECTED";

// moviesPage fetchMovies() için dataların çekilmesi
export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";


/** moviesAction */
export const moviesAction = {
    fetchMovies,
    fetchMovieDetail,
    onDeleteMovie
};


/** moviesPage fetchMovies() için dataların çekilmesi */
function fetchMovies()
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
function fetchMovieDetail(id)
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "FETCH_DETAIL_MOVIE",
                payload: axios.get(`${API_BASE}/movies/${id}`)
                .then( result => result.data)
                //.then( result => console.log(result.data))
            }
        )            
    }
}

/** Delete Movie */
function onDeleteMovie( _id )
{
    return dispatch => 
    {
        
        dispatch
        (
            {
                type: "DELETE_MOVIE",
                payload: axios.delete(`${API_BASE}/movies/${_id}`)
                    .then( result => Object.assign({}, result, { _id }))
            }
        )
        dispatch(alertActions.success("Delete is movie."));
        setTimeout(() => 
        {
            history.push("/api/movies")
            
        }, 1000);             
    }
}
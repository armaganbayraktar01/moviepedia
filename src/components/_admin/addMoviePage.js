import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

import {MovieForm} from './pageComponents/MovieForm';

//import { moviesAction } from '../../_core/_actions/moviesAction';
import { personsAction } from '../../_core/_actions/personsAction';
import { addMovieAction } from '../../_core/_actions/addMovieAction';

export const AddMoviePage = (props) => 
{

    const convert = (arr) => {

        return arr.map(item => item.value)
    }


    const { _id } = props.match.params;
    
    const { moviesReducer, addMovieReducer, personsReducer } = useSelector(state => state);
    const { movieList } = moviesReducer;
    const editMovie = movieList.find( item => item._id === _id);

    const { personsList } = personsReducer;    
    const directorList = personsList.filter ( item => convert(item.jobs).indexOf("actor") && convert(item.jobs).indexOf("actress") );
    const starList = personsList.filter ( item => convert(item.jobs).indexOf("director") );


    const dispatch = useDispatch();


    useEffect(() => {
        // iLK BAŞLADIĞINDA YAPILAN İŞLEM
        dispatch(personsAction.fetchPersons()); 
        

        // REFRESH YAPILINCA YAPILAN İŞLEM

        if (!editMovie && _id)
        {
            dispatch(addMovieAction.fetchEditMovie(_id))
        }
        

        //dispatch(moviesAction.fetchMovies());
            

    }, [editMovie, dispatch ]);


    return (
        <div>
            <MovieForm 
                editMovie={ editMovie }
                addMovieReducer={ addMovieReducer }
                directorList={directorList}
                starList={starList}
                onAddMovie={addMovieAction.onAddMovie}
                onPutMovie={addMovieAction.onPutMovie}
            />           
        </div>
    )
}
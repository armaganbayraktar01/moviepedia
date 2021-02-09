import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Actions */
import { moviesAction } from '../../_core/_actions/moviesAction';

/** React-Spinners */
import { ClockLoader } from 'react-spinners';

/** Components */
import { Container, Grid } from 'semantic-ui-react';

import MovieDetail from './pageComponents/movieDetail';


export const MovieDetailPage = (props) =>
{   
    const dispatch = useDispatch();

    const { _id } = props.match.params;
    const { movieList } = useSelector(state => state.moviesReducer);
    const movieData = movieList.find( item => item._id === _id);
    
    const [isLoading, setIsLoading] = useState(true);

    // const user = useSelector(state => state.authReducer.user ? state.authReducer.user : {} );
    // const adminStatus = user.user_role === "1" ? true : false;

    useEffect(() => { 
        
        if (!movieData && _id )
        {
            dispatch(moviesAction.fetchMovieDetail(_id));
        }
        setIsLoading(false)
    }, [movieData, _id, dispatch]);



    const loader = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={isLoading}
                size={50}
            />
        }
        </Grid>

    );

    const content = 
    (
        <MovieDetail
            movieData = { movieData }
        />
    )

    return ( 

        <div>
            <Container style={{ minHeight: '25em' }}>
            {
                isLoading ? loader : content
            }
            </Container>
        </div>

    );

}
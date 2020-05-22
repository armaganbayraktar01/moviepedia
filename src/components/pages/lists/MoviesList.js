import React from 'react';
import PropTypes from 'prop-types';

/** Semantic UI */
import { Grid } from 'semantic-ui-react';

/** Components */
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';
import { ClockLoader } from 'react-spinners';

/** Components */
import MovieCard from '../cards/movieCard';


/** Body */
const MoviesList  = ({ moviesReducerProps }) => {

    const emptyMovieListMessage = 
    (
        <ErrorMessageLabel
            errorTitle="Ooops"
            errorDesc="There are no movies yet"        
        />
    );

    const loader = 
    (
        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={moviesReducerProps.fetching}
                size={50}
            />
        }
        </Grid>
    );

    const movieCardContent = 
    (
        <Grid stackable centered columns={"4"}>   
        {
            moviesReducerProps.moviesReducerList.map(
                movieListData => 
                <MovieCard
                    key = { movieListData._id }
                    movieListDataProps = { movieListData }
                    //deleteMovieProps = { onDeleteMovieSubmitProps }
                />
            )
        }
        </Grid>
    );
  

    const movieListContent = 
    (
        <div>
            {
                moviesReducerProps.error.response 
                ?
                    <ErrorMessageLabel
                        errorTitle="Disconnect Server"
                        errorDesc="Failed to retrieve data. Please try again later."        
                    />
                : movieCardContent 
            }   
        </div>
    );

    return (
        

        <div>
            {
                moviesReducerProps.moviesReducerList.length === 0 ? 
                (
                    moviesReducerProps.fetching ? loader :  emptyMovieListMessage
                ) : movieListContent
                       
            }    

        </div>
    );

};


MoviesList.propTypes = {
    moviesReducerProps: PropTypes.shape({
        moviesReducerList: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;


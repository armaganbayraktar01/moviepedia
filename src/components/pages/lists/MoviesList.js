import React from 'react';
import PropTypes from 'prop-types';

/** Body */
const MoviesList  = ({ moviesReducerProps }) => {
    return (
        <div>
            ALL MOVIES
            
            {
                moviesReducerProps.moviesReducerList.map(

                    movieListData => 
                    <div>
                        { movieListData.title }
                    </div>

                )
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


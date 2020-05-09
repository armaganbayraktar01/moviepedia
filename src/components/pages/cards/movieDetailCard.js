import React from 'react';
import PropTypes from 'prop-types';


const movieDetailCard  = ({ movieData }) => {
    return (
        <div>
            { movieData.title }  
        </div>
    );
};


movieDetailCard.propTypes = {
    
};

export default movieDetailCard;

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Components */
import { MovieDetailCard } from './movieDetailCard';

/** Helpers */
import { listEmptyMessage } from '../../../_helpers/alertMessage';

/** Body */
class movieDetail extends Component
{

    /** FetchMovieDetail(id) den gelen selectMovie datasını yakaladım */

    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectMovie } = nextProps.moviesReducer;

        if ( selectMovie.title && selectMovie.title !== this.state.title )
        {
            this.setState({
                _id:  selectMovie._id,
                cover:  selectMovie.cover,
                title:  selectMovie.title,
                titleTr:  selectMovie.titleTr,
                imbd_id:  selectMovie.imbd_id,
                imbd_rating:  selectMovie.imbd_rating,
                synopsis:  selectMovie.synopsis,
                duration:  selectMovie.duration,
                genres:  selectMovie.genres,
                relase_year:  selectMovie.relase_year,
                director:  selectMovie.director,
                cast:  selectMovie.cast,
                images:  selectMovie.images,
                videos:  selectMovie.videos,
                countries:  selectMovie.countries,
                createdAt:  selectMovie.createdAt,
            })
            
        }  
    }

    
    /** movieData dan gelen data */
    state = {
        _id: this.props.movieData ? this.props.movieData._id : "",
        cover:  this.props.movieData ? this.props.movieData.cover : "",
        title:  this.props.movieData ? this.props.movieData.title : "",
        titleTr:  this.props.movieData ? this.props.movieData.titleTr : "",
        imbd_id:  this.props.movieData ? this.props.movieData.imbd_id : "",
        imbd_rating:  this.props.movieData ? this.props.movieData.imbd_rating : "",
        synopsis:  this.props.movieData ? this.props.movieData.synopsis : "",
        duration:  this.props.movieData ? this.props.movieData.duration : "",
        genres:  this.props.movieData ? this.props.movieData.genres : "",
        relase_year:  this.props.movieData ? this.props.movieData.relase_year : "",
        director:  this.props.movieData ? this.props.movieData.director : "",
        cast:  this.props.movieData ? this.props.movieData.cast : "",
        images:  this.props.movieData ? this.props.movieData.images : "",
        videos:  this.props.movieData ? this.props.movieData.videos : "",
        countries:  this.props.movieData ? this.props.movieData.countries : "",
        createdAt:  this.props.movieData ? this.props.movieData.createdAt : "",
        redirect: false
    };
 
    
    render() {

        const content = (

            <MovieDetailCard
                movieData = { this.state }
            />     
        )

        return (
            
            <div>
                { 
                    content ? content : listEmptyMessage
                }
                   
            </div>

        );
    }
}

const mapStateToProps = ({ moviesReducer }) => {
    return {
        moviesReducer            
    }
};



export default connect(mapStateToProps)(movieDetail);


import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Components */
import MovieDetailCard from '../cards/movieDetailCard';
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';

/** Body */
class movieDetail extends Component
{

    /** FetchMovieDetail(id) den gelen selectMovie datasını yakaladım */
    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectMovie } = nextProps.moviesReducerProps;
    
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
                createdAt:  selectMovie.createdAt
            })
        }
    }
    
    /** findMovieDetailProps dan gelen data */
    state = {
        _id: this.props.findMovieDetailProps ? this.props.findMovieDetailProps._id : "",
        cover:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.cover : "",
        title:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.title : "",
        titleTr:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.titleTr : "",
        imbd_id:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.imbd_id : "",
        imbd_rating:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.imbd_rating : "",
        synopsis:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.synopsis : "",
        duration:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.duration : "",
        genres:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.genres : "",
        relase_year:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.relase_year : "",
        director:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.director : "",
        cast:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.cast : "",
        createdAt:  this.props.findMovieDetailProps ? this.props.findMovieDetailProps.createdAt : "",

        //formErrors: {},
        redirect: false
    };

    static propTypes = {
        
    };

    render() {

        const emptyMovieListMessage = 
        (
            <ErrorMessageLabel
                errorTitle="Ooops"
                errorDesc="There are no movies yet"        
            />
        );


        const movieDetailCardContent = (

            <MovieDetailCard
                movieData = { this.state }
            />     
        )

        return (
            
            <div>
                { 
                    movieDetailCardContent ? movieDetailCardContent : emptyMovieListMessage
                }
                   
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(movieDetail);


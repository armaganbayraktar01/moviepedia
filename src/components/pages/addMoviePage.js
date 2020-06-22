import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieForm from './forms/MovieForm';
import { onAddMovieSubmit, onUpdateMovieSubmit, onFetchEditMovie } from '../../actions/addMovieReducerAction';
import { onFetchPersons } from '../../actions/personsReducerAction';

class addMoviePage extends Component
{

    componentDidMount() {
        const { match } = this.props;

        if (!this.props.findEditMovie && match.params._id)
        {
            this.props.onFetchEditMovie(match.params._id);
            //console.log("edit page")
        }

        this.props.onFetchPersons();
       
    }   


    render() {

        return (
            <div>
                <MovieForm
                    findEditMovieProps = { this.props.findEditMovie}
                    addMovieReducerProps = { this.props.addMovieReducer }
                    onAddMovieSubmitProps = { this.props.onAddMovieSubmit }
                    onUpdateMovieSubmitProps = { this.props.onUpdateMovieSubmit }
                    directorProps = { this.props.director}
                    castProps = { this.props.cast}
      
                />
            </div>
        );
    }
}


const mapStateToProps = ({ addMovieReducer, moviesReducer, personsReducer }, props) => {
    return {
        addMovieReducer,
        findEditMovie: moviesReducer.moviesReducerList.find( item => item._id === props.match.params._id),
        director: personsReducer.personsReducerList.filter( item => item.jobs === "director"),
        cast: personsReducer.personsReducerList.filter( item => item.jobs !== "director" )
    }
};

const mapDispatchToProps = {
    onAddMovieSubmit,
    onUpdateMovieSubmit,
    onFetchEditMovie,
    onFetchPersons
};


export default connect(mapStateToProps, mapDispatchToProps)(addMoviePage);

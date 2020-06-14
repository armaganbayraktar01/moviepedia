import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MovieForm from './forms/MovieForm';
import { onAddMovieSubmit, onUpdateMovieSubmit, onFetchEditMovie } from '../../actions/addMovieReducerAction';
import { onFetchPersons } from '../../actions/personsReducerActions';

class addMoviePage extends Component
{

    componentDidMount() {
        const { match } = this.props;

        if (!this.props.findEditMovie && match.params._id )
        {
            this.props.onFetchEditMovie(match.params._id);
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
                    personsReducerProps = { this.props.personsReducer} 
      
                />
            </div>
        );
    }
}


const mapStateToProps = ({ addMovieReducer, moviesReducer, personsReducer }, props) => {
    return {
        addMovieReducer,
        findEditMovie: moviesReducer.moviesReducerList.find( item => item._id === props.match.params._id),
        personsReducer
    }
};

const mapDispatchToProps = {
    onAddMovieSubmit,
    onUpdateMovieSubmit,
    onFetchEditMovie,
    onFetchPersons
};


export default connect(mapStateToProps, mapDispatchToProps)(addMoviePage);

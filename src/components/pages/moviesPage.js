import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { fetchMovies } from '../../actions/moviesReducerAction';

/** Components */
import MoviesList from './lists/MoviesList';

/** Body */
class moviesPage extends Component
{

    static propTypes = {
        moviesReducer: PropTypes.object.isRequired,
    };

    /** moviesReducerAction => fetchMovies */
    componentDidMount() {
        this.props.fetchMovies();
    }


    render() {
        return (
            <div>
                <MoviesList
                    moviesReducerProps = { this.props.moviesReducer }          
                />  
            </div>
        );
    }
}

/** Reducers */
const mapStateToProps = ({ moviesReducer }) => {
    return {
        moviesReducer         
    }
};

/** Action file dispatch */
const mapDispatchToProps = {
    fetchMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(moviesPage);

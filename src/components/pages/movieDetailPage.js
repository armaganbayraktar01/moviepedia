import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { FetchMovieDetail } from '../../actions/moviesReducerAction';

/** Components */
import MovieDetail from './middlelayer/movieDetail';

/** Body */
class movieDetailPage extends Component
{

    /** moviesReducerAction => fetchMovies */
    componentDidMount() {
        const { match } = this.props;

        if (!this.props.findMovieDetail && match.params._id )
        {
            this.props.FetchMovieDetail(match.params._id);
        }
    }


    render() {
        return (
            <div>
                <MovieDetail
                    findMovieDetailProps = { this.props.findMovieDetail }
                    moviesReducerProps = { this.props.moviesReducer}         
                />  
            </div>
        );
    }
}

/** Reducers */
const mapStateToProps = ({ moviesReducer }, props) => {
    return {
        moviesReducer,
        findMovieDetail: moviesReducer.moviesReducerList.find( item => item._id === props.match.params._id)        
    }
};

/** Action file dispatch */
const mapDispatchToProps = {
    FetchMovieDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(movieDetailPage);


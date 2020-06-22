import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { FetchPersonDetail } from '../../actions/personsReducerAction';

/** Components */
import PersonDetail from './middlelayer/personDetail';

/** Body */
class personDetailPage extends Component
{

    /** moviesReducerAction => fetchMovies */
    componentDidMount() {
        const { match } = this.props;  
        

        if (!this.props.findPersonDetail && match.params._id )
        {
            this.props.FetchPersonDetail(match.params._id);
        }
    }

   
 

    render() {
       
        return (
            <div>
                <PersonDetail
                    findPersonDetailProps = { this.props.findPersonDetail }
                    personsReducerProps = { this.props.personsReducer}         
                />  
            </div>
        );
    }
}

/** Reducers */
const mapStateToProps = ({ personsReducer }, props) => {
    return {
        personsReducer,
        findPersonDetail: personsReducer.personsReducerList.find( item => item._id === props.match.params._id)
        
    }
};

/** Action file dispatch */
const mapDispatchToProps = {
    FetchPersonDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(personDetailPage);


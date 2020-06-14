import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { onFetchPersons } from '../../actions/personsReducerActions';

/** Components */
import PersonsList from './lists/PersonsList';


class personsPage extends Component
{

    componentDidMount() {
        this.props.onFetchPersons();
    }


    static propTypes = {
        personsReducer: PropTypes.object.isRequired
    };


    render() {
        return (
            <div>
                <PersonsList
                    personsReducerProps = { this.props.personsReducer }
                />                 
            </div>
        );
    }
}

const mapStateToProps = ({ personsReducer }) => {
    return {
        personsReducer            
    }
};

/** Action file dispatch */
const mapDispatchToProps = {
     onFetchPersons
};

export default connect(mapStateToProps, mapDispatchToProps )(personsPage);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { onFetchPersons, onDeletePersonSubmit } from '../../actions/personsReducerAction';

/** Components */
import PersonsList from './lists/PersonsList';


class personsPage extends Component
{


    /** moviesReducerAction => fetchMovies */
    componentDidMount() {

        this.props.onFetchPersons();
    }


    static propTypes = {
        personsReducer: PropTypes.object.isRequired,
        directorOptions: PropTypes.array.isRequired,
        starOptions: PropTypes.array.isRequired,

    };


    render() {

        return (
            <div>
                <PersonsList
                    personsReducerProps = { this.props.personsReducer }
                    directorOptionsProps = { this.props.directorOptions }
                    starOptionsProps = { this.props.starOptions }
                    onDeletePersonSubmitProps = {this.props.onDeletePersonSubmit }
                    pageUrlLastIndexProps = {this.props.pageUrlLastIndex}
                />                 
            </div>
        );
    }
}

const mapStateToProps = ({ personsReducer }, props) => {

    const { match } = props;  
    const url2 = match.url;
    const url = url2.split('#').pop().split('?').pop();
    const pageUrlLastIndex = url.substring(url.lastIndexOf('/') + 1);

    const convert = (arr) => {

        return arr.map(item => item.value)
    }


    return {
        personsReducer,
        starOptions: personsReducer.personsReducerList.filter( item => convert(item.jobs).indexOf("director") ),
        directorOptions: personsReducer.personsReducerList.filter( item => convert(item.jobs).indexOf("actor") && convert(item.jobs).indexOf("actress") ),
        pageUrlLastIndex          
    }
};

/** Action file dispatch */
const mapDispatchToProps = {
     onFetchPersons,
     onDeletePersonSubmit
};

export default connect(mapStateToProps, mapDispatchToProps )(personsPage);

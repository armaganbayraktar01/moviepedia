import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonForm from '../pages/forms/PersonForm';
import { onAddPersonSubmit, onUpdatePersonSubmit, onFetchEditPerson } from '../../_core/_actions/addPersonAction';
import { onFetchPersons } from '../../actions/personsReducerAction';

class addPersonPage extends Component
{

    componentDidMount() {
        const { match } = this.props;

        if (!this.props.findEditPerson && match.params._id)
        {
            this.props.onFetchEditPerson(match.params._id);
            //console.log("edit page")
        }

        this.props.onFetchPersons();
       
    }   


    render() {

        return (
            <div>               
                <PersonForm
                    findEditPersonProps = { this.props.findEditPerson}
                    addPersonReducerProps = { this.props.addPersonReducer }
                    onAddPersonSubmitProps = { this.props.onAddPersonSubmit }
                    onUpdatePersonSubmitProps = { this.props.onUpdatePersonSubmit }
                    directorProps = { this.props.director}
                    castProps = { this.props.cast}
      
                />
            </div>
        );
    }
}


const mapStateToProps = ({ addPersonReducer, personsReducer, moviesReducer }, props) => {
    return {
        addPersonReducer,
        findEditPerson: personsReducer.personsList.find( item => item._id === props.match.params._id),
        director: personsReducer.personsList.filter( item => item.jobs === "director"),
        cast: personsReducer.personsList.filter( item => item.jobs !== "director" )
    }
};

const mapDispatchToProps = {
    onAddPersonSubmit,
    onUpdatePersonSubmit,
    onFetchEditPerson,
    onFetchPersons
};


export default connect(mapStateToProps, mapDispatchToProps)(addPersonPage);

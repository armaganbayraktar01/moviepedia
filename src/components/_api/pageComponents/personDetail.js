import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Components */
import { PersonDetailCard } from './personDetailCard';

/** Helpers */
import { listEmptyMessage } from '../../../_helpers/alertMessage';


/** Body */
class personDetail extends Component
{

    /** FetchMovieDetail(id) den gelen selectPerson datasını yakaladım */
    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectPerson } = nextProps.personsReducer;
   
        if ( selectPerson.fullname && selectPerson.fullname !== this.state.fullname )
        {
            this.setState({
                _id:  selectPerson._id,
                cover:  selectPerson.cover,
                fullname:  selectPerson.fullname,
                bio:  selectPerson.bio,
                imbd_id:  selectPerson.imbd_id,
                jobs:  selectPerson.jobs,
                birth:  selectPerson.birth,
                filmography:  selectPerson.filmography,
                directedMovies: selectPerson.directedMovies,
                createdAt:  selectPerson.createdAt
            })
        }  
        
        
    }

      
    /** personData dan gelen data */
    state = {
        _id: this.props.personData ? this.props.personData._id : "",
        cover:  this.props.personData ? this.props.personData.cover : "",
        fullname:  this.props.personData ? this.props.personData.fullname : "",
        bio:  this.props.personData ? this.props.personData.bio : "",
        imbd_id:  this.props.personData ? this.props.personData.imbd_id : "",
        jobs:  this.props.personData ? this.props.personData.jobs : "",
        birth:  this.props.personData ? this.props.personData.birth : "",
        filmography:  this.props.personData ? this.props.personData.filmography : "",
        directedMovies:  this.props.personData ? this.props.personData.directedMovies : "",
        createdAt:  this.props.personData ? this.props.personData.createdAt : "",

        //formErrors: {},
        redirect: false
    };

    
    render() {


        const content = (

            <PersonDetailCard
                personData = { this.state }
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

const mapStateToProps = ({ personsReducer }) => {
    return {
        personsReducer            
    }
};


export default connect(mapStateToProps)(personDetail);


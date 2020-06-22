import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Components */
import PersonDetailCard from '../cards/personDetailCard';
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';

/** Body */
class personDetail extends Component
{

    /** FetchMovieDetail(id) den gelen selectPerson datasını yakaladım */
    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectPerson } = nextProps.personsReducerProps;
   
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

  
    
    /** findPersonDetailProps dan gelen data */
    state = {
        _id: this.props.findPersonDetailProps ? this.props.findPersonDetailProps._id : "",
        cover:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.cover : "",
        fullname:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.fullname : "",
        bio:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.bio : "",
        imbd_id:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.imbd_id : "",
        jobs:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.jobs : "",
        birth:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.birth : "",
        filmography:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.filmography : "",
        directedMovies:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.directedMovies : "",
        createdAt:  this.props.findPersonDetailProps ? this.props.findPersonDetailProps.createdAt : "",

        //formErrors: {},
        redirect: false
    };

    static propTypes = {
        
    };

    
    render() {

        //console.log('state  - ' + this.state.genres)


        const emptyPersonListMessage = 
        (
            <ErrorMessageLabel
                errorTitle="Ooops"
                errorDesc="There are no movies yet"        
            />
        );


        const personDetailCardContent = (

            <PersonDetailCard
                personData = { this.state }
            />     
        )

        return (
            
            <div>
                { 
                    personDetailCardContent ? personDetailCardContent : emptyPersonListMessage
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


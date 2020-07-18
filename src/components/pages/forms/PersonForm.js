import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Image, Input, Button, TextArea } from 'semantic-ui-react';
import Select from 'react-select';

import { selectedOptions } from '../../../config/helpers';

/** Semantic Item */
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';

import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import tr from 'date-fns/locale/tr';

import 'react-datepicker/dist/react-datepicker.css';
import './PersonForm.css';

registerLocale('tr', tr)
setDefaultLocale('tr')

class PersonForm extends Component
{

    state = {
        _id: this.props.findEditPersonProps ? this.props.findEditPersonProps._id : "",
        fullname: this.props.findEditPersonProps ? this.props.findEditPersonProps.fullname : "",        
        jobs: this.props.findEditPersonProps ? this.props.findEditPersonProps.jobs : [],        
        cover: this.props.findEditPersonProps ? this.props.findEditPersonProps.cover : "",        
        imbd_id: this.props.findEditPersonProps ? this.props.findEditPersonProps.imbd_id : "",
        bio: this.props.findEditPersonProps ? this.props.findEditPersonProps.bio : "",
        birth: this.props.findEditPersonProps ? this.props.findEditPersonProps.birth : "",
        filmography: this.props.findEditPersonProps ? this.props.findEditPersonProps.filmography : [],
        directedMovies: this.props.findEditPersonProps ? this.props.findEditPersonProps.directedMovies : [],
        formErrors: {},
        redirect: false,
    };
    
    static propTypes = {
        onAddPersonSubmitProps: PropTypes.func.isRequired,
        addPersonReducerProps: PropTypes.object.isRequired,
        directorProps: PropTypes.array.isRequired,
        castProps: PropTypes.array.isRequired
    };


    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectPerson } = nextProps.addPersonReducerProps;


        if ( selectPerson.fullname && selectPerson.fullname !== this.state.fullname )
        {
            this.setState({
                fullname: selectPerson.fullname,
                jobs: selectPerson.jobs, 
                bio: selectPerson.bio, 
                imbd_id: selectPerson.imbd_id, 
                cover: selectPerson.cover, 
                birth: selectPerson.birth, 
                filmography: selectPerson.filmography, 
                directedMovies: selectPerson.directedMovies
            })
        }
    }
   
    // FORM YARDIMCI FONKSİYONLAR

    formOnSubmit = () => 
    {
        const formErrors = this.formValidate();

        this.setState({
            formErrors,
            redirect: true
        });

        const _id = this.state._id || this.props.addPersonReducerProps.selectPerson._id;

        if (Object.keys(formErrors).length === 0 )
        {
            if ( !_id )

                this.props.onAddPersonSubmitProps( this.state );
            else
                this.props.onUpdatePersonSubmitProps( { ...this.state, _id })

        }
        
    };

    formValidate = () =>     
    {
        const err = {};
        if ( !this.state.fullname ) err.fullname = "Cant't be black"
        if ( !this.state.cover ) err.cover = "Cant't be black"
        return err;
    }; 

    /** Form Handles */
    formHandleChange = (e) => 
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }; 

    /** select handles */
    handleChangeJobs = (jobs) => {
        this.setState({ jobs });
    };

    onDateChange = (data) => {
        console.log(data)
        this.setState({
          birth: data
        });
    };


    render() { 

        const formErrors = this.state.formErrors;
        const emptyPicture = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB468454186_.png";
        const errorMessage = 
        (      
            this.props.addPersonReducerProps.error.request &&
            (   
                <ErrorMessageLabel
                    errorTitle="Disconnect Server"
                    errorDesc="Failed to retrieve data. Please try again later."        
                />
            )
        )


        /** FORM */

            /** Jobs */
            const jobsOptions = [
                { _id: 'actor', value: 'actor', label: 'actor' },
                { _id: 'actress', value: 'actress', label: 'actress' },
                { _id: 'director', value: 'director', label: 'director' }
            ]

            const jobsSelected = selectedOptions(this.state.jobs)


            /** Date */

        const utcDate = this.state.birth;

        const form = 
        (
            
            <Grid celled>              

                <Grid.Column width={6} verticalAlign="middle">

                    <Image
                        src = { this.state.cover ? this.state.cover : emptyPicture }
                        size = "medium"
                        verticalAlign = "middle"
                    />

                </Grid.Column>

                <Grid.Column width={10}>
                     
                        <Form
                            onSubmit= { this.formOnSubmit }
                            loading = { this.props.addPersonReducerProps.fetching || this.props.addPersonReducerProps.selectPerson.fetching }
                        >
                         

                            <Form.Field
                                control = { Input }
                                name ="fullname"
                                label = "Person Fullname"
                                value = { this.state.fullname  || "" }
                                placeholder = "Person Fullname..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.fullname && formErrors.fullname }
                            />

                            <Form.Field
                                label = "Bio"
                                control = { TextArea }
                                name ="bio"
                                value = { this.state.bio  || "" }
                                placeholder = "Add to bio..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.bio && formErrors.bio }                         
                            />

                            <Form.Field
                                label = "Person Poster"
                                control = { Input }
                                name ="cover"
                                value = { this.state.cover  || "" }
                                placeholder = "Person Poster URL..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.cover && formErrors.cover }
                            />

                            <Form.Group widths='equal'>

                                <Form.Field
                                    control = { Input }
                                    name ="imbd_id"
                                    label = "Imbd ID"
                                    value = { this.state.imbd_id  || "" }
                                    placeholder = "IMBD ID..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.imbd_id && formErrors.imbd_id }                          
                                />
                               
                                <Form.Field
                                    label = "Jobs"
                                    control = { Select }
                                    name="jobs"
                                    placeholder="Select Jobs..."
                                    options={jobsOptions}
                                    value = {jobsSelected || "" }
                                    closeMenuOnSelect={false}
                                    onChange={this.handleChangeJobs}
                                    isMulti
                                    // error = { formErrors.synopsis && formErrors.synopsis }                         
                                /> 
                            </Form.Group>

                            <Form.Field>

                            <Form.Field label="Birth"/>

                                <DatePicker
                                                                                                        
                                    selected={utcDate ? new Date(utcDate) : null}
                                    onChange={this.onDateChange}
                                    isClearable
                                    showMonthDropdown
                                    showYearDropdown                                    
                                    dropdownMode="select"
                                    timeInputLabel=""
                                    dateFormat="dd MMMM yyyy"
                                    showTimeInput
                                    withPortal
                                />

                            </Form.Field>





                            <Form.Field
                                fluid primary
                                control = { Button }
                                type = "submit"
                                content = {
                                    this.props.addPersonReducerProps.selectPerson.editButtonActive === true
                                    ? "Edit Person" : "Add Person"
                                } 
                            />

                        </Form>
                </Grid.Column>
                
            </Grid>
        )
        
        return (
            <div>
                {
                    /** FORM OR MESSAGE */
                    
                    errorMessage ? errorMessage : 
                    (
                        this.props.addPersonReducerProps.done && this.state.redirect ?
                        <Redirect to="/persons" /> 
                        : form
                    )
                    
                }
                    
            </div>
        );
    }
}

export default connect(null, null)(PersonForm);

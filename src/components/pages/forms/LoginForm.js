import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { Grid, Form, Input, Button} from 'semantic-ui-react';

/** Semantic Item */
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';

class LoginForm extends Component
{
    static propTypes = {
        onAddMovieSubmitProps: PropTypes.func.isRequired,
        addMovieReducerProps: PropTypes.object.isRequired
    };

    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectMovie } = nextProps.addMovieReducerProps;
        if ( selectMovie.user_name && selectMovie.user_name !== this.state.user_name )
        {
            this.setState({
                user_name: selectMovie.user_name,
                user_password: selectMovie.user_password,
                //genres: selectMovie.genres
            })
        }
    }
   

    state = {
        _id: this.props.findEditMovieProps ? this.props.findEditMovieProps._id : "",
        user_name: this.props.findEditMovieProps ? this.props.findEditMovieProps.user_name : "",
        user_password: this.props.findEditMovieProps ? this.props.findEditMovieProps.user_password : "",
        formErrors: {},
        redirect: false
    };

    // FORM YARDIMCI FONKSİYONLAR

    formOnSubmit = () => 
    {
        const formErrors = this.formValidate();

        this.setState({
            formErrors,
            redirect: true
        });

        const _id = this.state._id || this.props.addMovieReducerProps.selectMovie._id;

        if (Object.keys(formErrors).length === 0 )
        {
            if ( !_id )

                this.props.onAddMovieSubmitProps( this.state );
            else
                this.props.onUpdateMovieSubmitProps( { ...this.state, _id })

        }
        
    };

    formHandleChange = (e) => 
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formValidate = () =>     
    {
        const err = {};
        if ( !this.state.user_name ) err.user_name = "Cant't be black"
        if ( !this.state.user_password ) err.user_password = "Cant't be black"
        return err;
    };


    render() { 
       
        const formErrors = this.state.formErrors;
       /* const errorMessage = 
        (      
            this.props.addMovieReducerProps.error.request &&
            (   
                <ErrorMessageLabel
                    errorTitle="Disconnect Server"
                    errorDesc="Failed to retrieve data. Please try again later."        
                />
            )

        )*/


        const form = 
        (
            <Grid celled>


                <Grid.Column width={16}>

                    <Form 
                        onSubmit= { this.formOnSubmit }
                        //loading = {  }
                    >

                        <Form.Field
                            control = { Input }
                            id = "user_name"
                            name ="user_name"
                            label = "Username"
                            value = { this.state.user_name }
                            placeholder = "username..."
                            onChange = { this.formHandleChange }
                            error = { formErrors.user_name && formErrors.user_name }
                        />
                        <Form.Field
                            control = { Input }
                            id = "user_password"
                            name ="user_password"
                            label = "User Password"
                            value = { this.state.user_password }
                            placeholder = "user password..."
                            onChange = { this.formHandleChange }
                            error = { formErrors.user_password && formErrors.user_password }
                        />

                        <Form.Field
                            fluid primary
                            control = { Button }
                            type = "submit"
                            content = { 
                                "Login" 
                            } 
           
                               
                        />

                    </Form>
                </Grid.Column>

            </Grid>
        )

        return (
            <div>
                {
                    form
                    /*
                    errorMessage ? errorMessage : 
                    (
                        this.props.addMovieReducerProps.done && this.state.redirect ?
                        <Redirect to="/movies" /> 
                        : form
                    )*/
                    
                }
                    
            </div>
        );
    }
}

export default connect(null, null)(LoginForm);

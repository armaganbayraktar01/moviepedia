import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Image, Input, Button, TextArea } from 'semantic-ui-react';
import Select from 'react-select';
/** Semantic Item */
import ErrorMessageLabel from '../../items/labels/ErrorMessageLabel';

class MovieForm extends Component
{

    state = {
        _id: this.props.findEditMovieProps ? this.props.findEditMovieProps._id : "",
        title: this.props.findEditMovieProps ? this.props.findEditMovieProps.title : "",        
        titleTr: this.props.findEditMovieProps ? this.props.findEditMovieProps.titleTr : "",        
        cover: this.props.findEditMovieProps ? this.props.findEditMovieProps.cover : "",        
        imbd_id: this.props.findEditMovieProps ? this.props.findEditMovieProps.imbd_id : "",
        imbd_rating: this.props.findEditMovieProps ? this.props.findEditMovieProps.imbd_rating : "",
        synopsis: this.props.findEditMovieProps ? this.props.findEditMovieProps.synopsis : "",
        duration: this.props.findEditMovieProps ? this.props.findEditMovieProps.duration : "",
        genres: this.props.findEditMovieProps ? this.props.findEditMovieProps.genres : "",
        relase_year: this.props.findEditMovieProps ? this.props.findEditMovieProps.relase_year : "", 
        director: this.props.findEditMovieProps ? this.props.findEditMovieProps.director : "",
        cast: this.props.findEditMovieProps ? this.props.findEditMovieProps.cast : "", 
        images: this.props.findEditMovieProps ? this.props.findEditMovieProps.images : "",
        videos: this.props.findEditMovieProps ? this.props.findEditMovieProps.videos : "", 
        countries: this.props.findEditMovieProps ? this.props.findEditMovieProps.countries : "",
        formErrors: {},
        redirect: false,
    };
    
    static propTypes = {
        onAddMovieSubmitProps: PropTypes.func.isRequired,
        addMovieReducerProps: PropTypes.object.isRequired,
        personsReducerProps: PropTypes.object.isRequired
    };


    UNSAFE_componentWillReceiveProps( nextProps )
    {
        const { selectMovie } = nextProps.addMovieReducerProps;


        if ( selectMovie.title && selectMovie.title !== this.state.title )
        {
            this.setState({
                title: selectMovie.title,
                titleTr: selectMovie.titleTr, 
                cover: selectMovie.cover, 
                imbd_id: selectMovie.imbd_id, 
                imbd_rating: selectMovie.imbd_rating, 
                synopsis: selectMovie.synopsis, 
                duration: selectMovie.duration, 
                genres: selectMovie.genres, 
                relase_year: selectMovie.relase_year, 
                director: selectMovie.director, 
                cast: selectMovie.cast, 
                images: selectMovie.images, 
                videos: selectMovie.videos, 
                countries: selectMovie.countries
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

        const _id = this.state._id || this.props.addMovieReducerProps.selectMovie._id;

        if (Object.keys(formErrors).length === 0 )
        {
            if ( !_id )

                this.props.onAddMovieSubmitProps( this.state );
            else
                this.props.onUpdateMovieSubmitProps( { ...this.state, _id })

        }
        
    };

    optionConverterHelper = (data) => {
        const convertedData = Array.from(data);
        return convertedData.map((item => (
                { value: item._id, label: item.fullname }
        )))
    }

    selectHelper = (data) => {
        const convertedData = Array.from(data);
        return convertedData.map((item => (
                { value: item.value, label: item.label }
        )))

    };
 
    /** select handles */
    handleChangeGenres = (genres) => {
        this.setState({ genres });
    }


    /** Form Handles */

    formHandleChange = (e) => 
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formValidate = () =>     
    {
        const err = {};
        if ( !this.state.title ) err.title = "Cant't be black"
        if ( !this.state.cover ) err.cover = "Cant't be black"
        return err;
    };



    render() {    
     
        const formErrors = this.state.formErrors;
        const emptyPicture = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB468454186_.png";
        const errorMessage = 
        (      
            this.props.addMovieReducerProps.error.request &&
            (   
                <ErrorMessageLabel
                    errorTitle="Disconnect Server"
                    errorDesc="Failed to retrieve data. Please try again later."        
                />
            )
        )


        /** FORM */

            /** GENRES */
            const genresOptions = [
                { value: '5ea03bd74904dc0db8e0cb98', label: 'comedy' },
                { value: '5ea03bce4904dc0db8e0cb97', label: 'drama' },
                { value: '5ea03bee4904dc0db8e0cb9a', label: 'action' },
                { value: '5ea0318a7c213e39c43deae3', label: 'crime' }
            ]

            const genresSelected = this.selectHelper(this.state.genres)
            //console.log(genresSelected);

            /** Persons */
            const personsOptions = this.optionConverterHelper(this.props.personsReducerProps.personsReducerList)
       

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
                            loading = { this.props.addMovieReducerProps.fetching || this.props.addMovieReducerProps.selectMovie.fetching }
                        >

                            <Form.Group widths='equal'>                             
                                 
                                <Form.Field
                                    label = "persons"
                                    control = { Select }
                                    id = "persons"
                                    name="persons"
                                    placeholder="Select persons..."
                                    options={personsOptions}
                                    //value={personsSelected}
                                    closeMenuOnSelect={false}
                                    onChange={this.handleChangePersons}
                                    isMulti
                                // error = { formErrors.synopsis && formErrors.synopsis }                         
                                />
 
                           </Form.Group>

                            <Form.Field
                                control = { Input }
                                id = "title"
                                name ="title"
                                label = "Movie Title"
                                value = { this.state.title }
                                placeholder = "Movie title..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.title && formErrors.title }
                            />
                            <Form.Field
                                control = { Input }
                                id = "titleTr"
                                name ="titleTr"
                                label = "Movie titleTr"
                                value = { this.state.titleTr }
                                placeholder = "Movie titleTr..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.titleTr && formErrors.titleTr }
                            />
                            <Form.Field
                                control = { Input }
                                id = "cover"
                                name ="cover"
                                label = "Movie Cover URL"
                                value = { this.state.cover }
                                placeholder = "Movie cover URL..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.cover && formErrors.cover }
                            />

                            <Form.Group widths='equal'>

                                <Form.Field
                                    control = { Input }
                                    id = "imbd_id"
                                    name ="imbd_id"
                                    label = "Movie imbd_id"
                                    value = { this.state.imbd_id }
                                    placeholder = "Movie  IMBD ID..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.imbd_id && formErrors.imbd_id }                          
                                />                   

                                <Form.Field
                                    control = { Input }
                                    id = "imbd_rating"
                                    name ="imbd_rating"
                                    label = "Movie imbd ratings"
                                    value = { this.state.imbd_rating }
                                    placeholder = "Movie IMBD RATINGS..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.imbd_rating && formErrors.imbd_rating }                          
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Field
                                    control = { Input }
                                    id = "duration"
                                    name ="duration"
                                    label = "Movie duration"
                                    value = { this.state.duration }
                                    placeholder = "Movie Duration..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.duration && formErrors.duration }                          
                                />

                                <Form.Field
                                    control = { Input }
                                    id = "relase_year"
                                    name ="relase_year"
                                    label = "Movie relase year"
                                    value = { this.state.relase_year }
                                    placeholder = "Movie relase year..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.relase_year && formErrors.relase_year }                          
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>                             
                                 
                                <Form.Field
                                    label = "Genres"
                                    control = { Select }
                                    id = "genres"
                                    name="genres"
                                    placeholder="Select Genres..."
                                    options={genresOptions}
                                    value={genresSelected}
                                    closeMenuOnSelect={false}
                                    onChange={this.handleChangeGenres}
                                    isMulti
                                   // error = { formErrors.synopsis && formErrors.synopsis }                         
                                />


                          </Form.Group>


                            <Form.Field
                                control = { TextArea }
                                id = "synopsis"
                                name ="synopsis"
                                label = "Movie synopsis"
                                value = { this.state.synopsis }
                                placeholder = "Movie synopsis..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.synopsis && formErrors.synopsis }                         
                            />



                            <Form.Field
                                fluid primary
                                control = { Button }
                                type = "submit"
                                content = {
                                    this.props.addMovieReducerProps.selectMovie.editButtonActive === true
                                    ? "Edit Movie" : "Add Movie"
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
                        this.props.addMovieReducerProps.done && this.state.redirect ?
                        <Redirect to="/movies" /> 
                        : form
                    )
                    
                }
                    
            </div>
        );
    }
}

export default connect(null, null)(MovieForm);

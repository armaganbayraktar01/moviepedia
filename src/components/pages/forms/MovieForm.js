import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Form, Image, Input, Button, TextArea } from 'semantic-ui-react';
import Select from 'react-select';

import { selectedOptions, convertedMediaUrl } from '../../../config/helpers';


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
        genres: this.props.findEditMovieProps ? this.props.findEditMovieProps.genres : [],
        relase_year: this.props.findEditMovieProps ? this.props.findEditMovieProps.relase_year : "", 
        director: this.props.findEditMovieProps ? this.props.findEditMovieProps.director : [],
        cast: this.props.findEditMovieProps ? this.props.findEditMovieProps.cast : [], 
        images: this.props.findEditMovieProps ? this.props.findEditMovieProps.images : [],
        videos: this.props.findEditMovieProps ? this.props.findEditMovieProps.videos : [], 
        countries: this.props.findEditMovieProps ? this.props.findEditMovieProps.countries : "",
        formErrors: {},
        redirect: false,
    };
    
    static propTypes = {
        onAddMovieSubmitProps: PropTypes.func.isRequired,
        addMovieReducerProps: PropTypes.object.isRequired,
        directorProps: PropTypes.array.isRequired,
        castProps: PropTypes.array.isRequired
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

    formValidate = () =>     
    {
        const err = {};
        if ( !this.state.title ) err.title = "Cant't be black"
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
    handleChangeGenres = (genres) => {
        this.setState({ genres });
    }

    handleChangeDirector = (director) => {
        this.setState({ director });
    }

    handleChangeCast = (cast) => {
        this.setState({ cast });
    }

    handleChangeImages = (e) => { 

        const index = e.target.name;
        const value = e.target.value;

        const title = value;
        const url = "https://image.tmdb.org/t/p/original/" + value + ".jpg";
        const thumbUrl = "https://image.tmdb.org/t/p/w500_and_h282_face/" + value + ".jpg";

        const images = this.state.images;
        images[index] = {title:title, url: url, thumbUrl: thumbUrl};
        
        this.setState({images: images});
    }

    handleChangeVideos = (e) => { 
        
        const index = e.target.name;
        const value = e.target.value;

        const title = value;
        const url = "https://www.youtube.com/watch?v=" + value;
        const ytid = value;

        const videos = this.state.videos;
        videos[index] = {title:title, url: url, ytid: ytid};

        this.setState({videos: videos});
    }
 

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

            /** Genres */
            const genresOptions = [
                { value: '5ea03bd74904dc0db8e0cb98', label: 'comedy' },
                { value: '5ea03bce4904dc0db8e0cb97', label: 'drama' },
                { value: '5ea03bee4904dc0db8e0cb9a', label: 'action' },
                { value: '5ea0318a7c213e39c43deae3', label: 'crime' }
            ]
            const genresSelected = selectedOptions(this.state.genres)

            /** Director */
            const directorOptions = selectedOptions(this.props.directorProps)
            const directorSelected = selectedOptions(this.state.director)

            console.log(this.props)

            /** Cast */
            const castOptions = selectedOptions(this.props.castProps)
            const castSelected = selectedOptions(this.state.cast)

            /** Images */
            const imageSelected = convertedMediaUrl(this.state.images)

            /** Videos */
            const videoSelected = convertedMediaUrl(this.state.videos)


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

                            <Form.Field
                                control = { Input }
                                name ="title"
                                label = "Movie Title (Orginal)"
                                value = { this.state.title  || "" }
                                placeholder = "Movie Title (Orginal)..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.title && formErrors.title }
                            />

                            <Form.Field
                                control = { Input }
                                name ="titleTr"
                                label = "Movie Title (Turkish)"
                                value = { this.state.titleTr  || "" }
                                placeholder = "Movie Title (Turkish)..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.titleTr && formErrors.titleTr }
                            />

                            <Form.Field
                                label = "Synopsis"
                                control = { TextArea }
                                name ="synopsis"
                                value = { this.state.synopsis  || "" }
                                placeholder = "Add to Synopsis..."
                                onChange = { this.formHandleChange }
                                error = { formErrors.synopsis && formErrors.synopsis }                         
                            />

                            <Form.Field
                                label = "Movie Poster"
                                control = { Input }
                                name ="cover"
                                value = { this.state.cover  || "" }
                                placeholder = "Movie Poster URL..."
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
                                    control = { Input }
                                    name ="imbd_rating"
                                    label = "IMBD Ratings"
                                    value = { this.state.imbd_rating  || "" }
                                    placeholder = "IMBD Ratings..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.imbd_rating && formErrors.imbd_rating }                          
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Field
                                    control = { Input }
                                    name ="duration"
                                    label = "Duration"
                                    value = { this.state.duration || ""  }
                                    placeholder = "Duration..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.duration && formErrors.duration }                          
                                />

                                <Form.Field
                                    control = { Input }
                                    name ="relase_year"
                                    label = "Relase Year"
                                    value = { this.state.relase_year  || "" }
                                    placeholder = "Relase Year..."
                                    onChange = { this.formHandleChange }
                                    error = { formErrors.relase_year && formErrors.relase_year }                          
                                />

                            </Form.Group>

                            <Form.Field
                                label = "Directors"
                                control = { Select }
                                name="director"
                                placeholder="Select Directors..."
                                options={directorOptions}
                                value={directorSelected}
                                closeMenuOnSelect={false}
                                onChange={this.handleChangeDirector}
                                isMulti
                                // error = { formErrors.director && formErrors.director }                         
                            />
                            
                            <Form.Field
                                label = "Stars"
                                control = { Select }
                                name="cast"
                                placeholder="Select Stars ..."
                                options={castOptions}
                                value = {castSelected || "" }
                                closeMenuOnSelect={false}
                                onChange={this.handleChangeCast}
                                isMulti
                                // error = { formErrors.cast && formErrors.cast }                         
                            />

                            <Form.Field
                                label = "Genres"
                                control = { Select }
                                name="genres"
                                placeholder="Select Genres..."
                                options={genresOptions}
                                value = {genresSelected || "" }
                                closeMenuOnSelect={false}
                                onChange={this.handleChangeGenres}
                                isMulti
                                // error = { formErrors.synopsis && formErrors.synopsis }                         
                            />

                            <Form.Group widths='equal'>
                                
                                <Form.Field
                                    control = { Input }
                                    name ="0"
                                    label = "Image 1"
                                    placeholder = "Movie images..."
                                    onChange = { this.handleChangeImages }
                                    //error = { formErrors.images && formErrors.images }
                                    value = {imageSelected[0] || "" }
                                />

                                <Form.Field
                                    control = { Input }
                                    name ="1"
                                    label = "Image 2"
                                    placeholder = "Movie images..."
                                    onChange = { this.handleChangeImages }
                                    //error = { formErrors.images && formErrors.images }
                                    value = {imageSelected[1] || "" }
                                />

                                <Form.Field
                                    control = { Input }
                                    name ="2"
                                    label = "Image 3"
                                    placeholder = "Paste TMBD Image ID..."
                                    onChange = { this.handleChangeImages }
                                    //error = { formErrors.images && formErrors.images }
                                    value = {imageSelected[2] || "" }
                                />

                            </Form.Group>

                            <Form.Field
                                control = { Input }
                                name ="0"
                                label = "Trailers & Videos"
                                placeholder = "Paste Youtube Video ID..."
                                onChange = { this.handleChangeVideos }
                                //error = { formErrors.images && formErrors.images }
                                value = {videoSelected[0] || "" }
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

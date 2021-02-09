import React, { useEffect, useState } from 'react';
import {useDispatch } from 'react-redux';

import { Grid, Form, Input, TextArea, Button, Dropdown, } from 'semantic-ui-react';

import  { selectedOptions } from '../../../_helpers/helpers';

import { addMovieAction } from '../../../_core/_actions/addMovieAction';



export const MovieForm = (props) => 
{
    const dispatch = useDispatch();

    const { editMovie, addMovieReducer, starList, directorList } = props;

    const [state, setState] = useState(
    {
        _id: editMovie ? editMovie._id : "",
        title: editMovie ? editMovie.title : "",        
        titleTr: editMovie ? editMovie.titleTr : "",        
        cover: editMovie ? editMovie.cover : "",        
        imbd_id: editMovie ? editMovie.imbd_id : "",
        imbd_rating: editMovie ? editMovie.imbd_rating : "",
        synopsis: editMovie ? editMovie.synopsis : "",
        duration: editMovie ? editMovie.duration : "",
        genres: editMovie ? editMovie.genres : [],
        relase_year: editMovie ? editMovie.relase_year : "", 
        director: editMovie ? editMovie.director : [],
        cast: editMovie ? editMovie.cast : [], 
        images: editMovie ? editMovie.images : [],
        videos: editMovie ? editMovie.videos : [], 
        countries: editMovie ? editMovie.countries : "",
        editButtonActive: editMovie ? true : false,
        formErrors: {},
        redirect: false,
    });
  


    const { selectMovie, editButtonActive } = addMovieReducer;

    useEffect(() => {
       

        if (selectMovie.title){

            
            setState({
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

    }, [selectMovie])


    const formValidate = () =>     
    {
        const err = {};
        if ( !state.title ) err.title = "Cant't be black"
        //if ( !state.cover ) err.cover = "Cant't be black"
        return err;
    }; 


    /** Form Handles */
    const formHandleChange = (event, result) => 
    {
        const { name, value } = result || event.target;
        setState({
             ...state, [name]: value
        });

    }; 


    const formOnSubmit = () => 
    {
        const formErrors = formValidate();

        setState({
            formErrors,
            redirect: true
        });

        const { _id } = state || selectMovie;

        if (Object.keys(formErrors).length === 0 )
        {
            if ( !_id )
            {
                dispatch( addMovieAction.onAddMovie(state) )

            } else {
                dispatch( addMovieAction.onPutMovie( { ...state, _id }))
            }
        }

        
    };


    const { genres, cast, director } = state;

    const genresOptions = [
        { key: '5ffc2f3150d4d0f7a0795bd0', value: '5ffc2f3150d4d0f7a0795bd0', text: 'comedy' },
        { key: '5ffc2ef350d4d0f7a0795bcf', value: '5ffc2ef350d4d0f7a0795bcf', text: 'drama' },
        { key: '5ffc25542d1814dc4da148a6', value: '5ffc25542d1814dc4da148a6', text: 'action' },
        { key: '5ffc24cc2d1814dc4da148a5', value: '5ffc24cc2d1814dc4da148a5', text: 'crime' }
    ];

    const genresSelected = selectedOptions(genres)
   
 

    const castOptions = selectedOptions(starList)
    const castSelected = selectedOptions(cast)
    const directorOptions = selectedOptions(directorList)
    const directorSelected = selectedOptions(director)


    const form =
    (
        <Grid celled>              

            <Grid.Column width={10}>

                <Form
                    onSubmit= { formOnSubmit }
                    //loading = { addMovieReducer.fetching || addMovieReducer.selectMovie.fetching }
                >   

                    <Form.Field
                        control = { Input }
                        name ="title"
                        label = "Movie Title (Orginal)"
                        value = { state.title  || "" }
                        placeholder = "Movie Title (Orginal)..."
                        onChange = { formHandleChange }
                        //error = { formErrors.title && formErrors.title }
                    />

                    <Form.Field
                        control = { Input }
                        name ="titleTr"
                        label = "Movie Title (Turkish)"
                        value = { state.titleTr  || "" }
                        placeholder = "Movie Title (Turkish)..."
                        onChange = { formHandleChange }
                        //error = { formErrors.titleTr && formErrors.titleTr }
                    />

                    <Form.Field
                        label = "Synopsis"
                        control = { TextArea }
                        name ="synopsis"
                        value = { state.synopsis || "" }
                        placeholder = "Add to Synopsis..."
                        onChange = { formHandleChange }
                        //error = { formErrors.synopsis && formErrors.synopsis }                         
                    />

                    <Form.Field
                        label = "Movie Poster"
                        control = { Input }
                        name ="cover"
                        value = { state.cover  || "" }
                        placeholder = "Movie Poster URL..."
                        onChange = { formHandleChange }
                        //error = { formErrors.cover && formErrors.cover }
                    />

                    <Form.Group widths='equal'>

                        <Form.Field
                            control = { Input }
                            name ="imbd_id"
                            label = "Imbd ID"
                            value = { state.imbd_id  || "" }
                            placeholder = "IMBD ID..."
                            onChange = { formHandleChange }
                            //error = { formErrors.imbd_id && formErrors.imbd_id }                          
                        />                   

                        <Form.Field
                            control = { Input }
                            name ="imbd_rating"
                            label = "IMBD Ratings"
                            value = { state.imbd_rating  || "" }
                            placeholder = "IMBD Ratings..."
                            onChange = { formHandleChange }
                            //error = { formErrors.imbd_rating && formErrors.imbd_rating }                          
                        />

                    </Form.Group>

                    <Form.Group widths='equal'>

                        <Form.Field
                            control = { Input }
                            name ="duration"
                            label = "Duration"
                            value = { state.duration || ""  }
                            placeholder = "Duration..."
                            onChange = { formHandleChange }
                            //error = { formErrors.duration && formErrors.duration }                          
                        />

                        <Form.Field
                            control = { Input }
                            name = "relase_year"
                            label = "Relase Year"
                            value = { state.relase_year  || "" }
                            placeholder = "Relase Year..."
                            onChange = { formHandleChange }
                            //error = { formErrors.relase_year && formErrors.relase_year }                          
                        />

                    </Form.Group>

                    <Form.Field
                        control = { Dropdown }
                        name="genres"
                        placeholder='Genres'
                        fluid
                        multiple
                        search
                        selection
                        //value = { genresSelected.map(item => item ? item.value : "") }
                        defaultValue = { genresSelected.map(item => item ? item.value : "") }
                        options={genresOptions}
                        label={'Genres'}
                        onChange = { formHandleChange }
                        //error = { formErrors.genres && formErrors.genres }
                    />

                    <Form.Field
                        control = { Dropdown }
                        name="cast"
                        placeholder='Cast'
                        fluid
                        multiple
                        search
                        selection
                        //value = { castSelected.map(item => item ? item.value : "") }
                        defaultValue = { castSelected.map(item => item ? item.value : "") }
                        options={castOptions}
                        label={'Cast'}
                        onChange = { formHandleChange }
                        //error = { formErrors.cast && formErrors.cast }
                    />  

                    <Form.Field
                        control = { Dropdown }
                        name="director"
                        placeholder='Director'
                        fluid
                        multiple
                        search
                        selection
                        //value = { directorSelected.map(item => item ? item.value : "")  }
                        defaultValue = { directorSelected.map(item => item ? item.value : "") }
                        options={directorOptions}
                        label={'Director'}
                        onChange = { formHandleChange }
                        //error = { formErrors.director && formErrors.director }
                    />   

                    <Form.Field
                        fluid primary
                        control = { Button }
                        type = "submit"
                        content = {editButtonActive ? "Edit Movie" : "Add Movie"}
                    />

                </Form>

            </Grid.Column>

        </Grid>

    )


    return (
        <div>
            {
                form
            }      
        </div>
    )
}
import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import MovieCardSemantic from '../../items/cards/MovieCardSemantic';


const movieCard  = ({ movieListDataProps, deleteMovieProps }) => (
    <Grid.Column>
        <Card>
            <MovieCardSemantic
                _id = { movieListDataProps._id }
                cover = { movieListDataProps.cover }
                title = { movieListDataProps.title }
                titleTr = { movieListDataProps.titleTr }
                //imbd_id = { movieListDataProps.imbd_id }
                imbd_rating = { movieListDataProps.imbd_rating }
                //synopsis = { movieListDataProps.synopsis }
                //genres = { movieListDataProps.genres }
                relase_year = { movieListDataProps.relase_year }
                //director = { movieListDataProps.director }
                //cast = { movieListDataProps.cast }
                //createdAt = { movieListDataProps.createdAt }
                deleteButton = { deleteMovieProps }
            />           
        </Card>
    </Grid.Column>
);



export default movieCard;
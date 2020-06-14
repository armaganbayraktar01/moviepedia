import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import PersonCardSemantic from '../../items/cards/PersonCardSemantic';


const personCard  = ({ personListDataProps, deleteMovieProps }) => (
    <Grid.Column>
 
        <Card>
            <PersonCardSemantic
                _id = { personListDataProps._id }
                cover = { personListDataProps.cover }
                fullname = { personListDataProps.fullname }
                bio = { personListDataProps.bio }
                //imbd_id = { personListDataProps.imbd_id }
                birth = { personListDataProps.birth }
                //filmography = { personListDataProps.filmography }
                //directedMovies = { personListDataProps.directedMovies }
                //createdAt = { personListDataProps.createdAt }
                //deleteButton = { deleteMovieProps }
            />           
        </Card>

    </Grid.Column>
);



export default personCard;
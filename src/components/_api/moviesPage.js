import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/** Components */
import { Container, Grid, Card, Image, Header, Label, Dropdown } from 'semantic-ui-react';

/** Helpers */
import { listEmptyMessage, disconnectMessage } from '../../_helpers/alertMessage';

/** React-Spinners */
import { ClockLoader } from 'react-spinners';

/** Actions */
import { moviesAction } from '../../_core/_actions/moviesAction';
import { alertActions } from '../../_core/_actions/alertAction';


export default function MoviesPage()
{   
    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(moviesAction.fetchMovies())

    }, [dispatch]);

    const {movieList, fetching, error } = useSelector(state => state.moviesReducer);

    const user = useSelector(state => state.authReducer.user ? state.authReducer.user : {} );
    const adminStatus = user.user_role === "1" ? true : false;
    

    const handleDeleteMovie = (movieId) => {
        dispatch(moviesAction.onDeleteMovie(movieId));
        dispatch(alertActions.success("Delete is movie."));
        dispatch(moviesAction.fetchMovies());
    }
 
    const loader = 
    (

        <Grid stackable centered columns={"3"}>   
        {
            <ClockLoader
                color={'#d50b0b'}
                loading={fetching}
                size={50}
            />
        }
        </Grid>

    );
    

    const content =
    (      
        <Grid stackable centered columns={"4"}>   
        {
            movieList.map( movie =>
            (
                <Grid.Column key = { movie._id }>

                    <Card>
                        <Image
                            as={Link} 
                            to={`/api/movie/${movie._id}`}
                            fluid
                            label={
                                {
                                    color:'black',
                                    icon: "star",
                                    attached : "bottom",
                                    content: `IMBD : ${ movie.imbd_rating ? movie.imbd_rating : "" }`
                                }
                            }
                            src={ movie.cover ? movie.cover : "..." }
                        />

                        {
                            adminStatus && 
                            (
                                <Label attached="top right" color={"red"} size={"mini"}>                    
                                    <Dropdown item icon={"ellipsis horizontal"} pointing="top right">
                                        <Dropdown.Menu>
                                            <Dropdown.Item 
                                                as={ Link } 
                                                to={`/dashboard/movie/edit/${movie._id}`}
                                                icon='pencil' 
                                                text='Edit Movie'
                                            /> 

                                            <Dropdown.Divider/>

                                            <Dropdown.Item 
                                                onClick={() => handleDeleteMovie(movie._id)}
                                                icon='trash' 
                                                text='Delete Movie'
                                            />

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Label>
                            )
                        }

                        <Card.Content>

                            <Header 
                                as="h5" 
                                content = { movie.titleTr ? movie.titleTr : ""}
                                subheader = { movie.title ? movie.title : "" }
                            />

                        </Card.Content>
                    </Card>
            
                </Grid.Column>
            ))
        }
        </Grid>
    );
    
    return (
     

        <div>
            <Container style={{ marginTop: '3em', marginBottom: '2em', minHeight: '25em' }}> 
            {           
                ( error.response ? disconnectMessage : (fetching ? loader : ( movieList.length !== 0 ? content : listEmptyMessage ) ) )
            }
            </Container>
        </div>

    );

}
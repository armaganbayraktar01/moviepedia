import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Card, Image, Label, Dropdown } from 'semantic-ui-react';


const personCard  = ({ data, adminStatus, handleDeletePerson }) => 
(
    <Grid.Column key = { data._id }>

        <Card>
            <Image
                as={Link} 
                to={`/api/person/${data._id}`}
                fluid
                label={
                    {
                        color:'black',
                        icon: "star",
                        attached : "bottom",
                        content: `IMBD : ${ data.imbd_rating ? data.imbd_rating : "" }`
                    }
                }
                src={ data.cover ? data.cover : "..." }
            />

            {
            adminStatus && (
                <Label attached="top right" color={"red"} size={"mini"}>                    
                    <Dropdown item icon={"ellipsis horizontal"} pointing="top right">
                        <Dropdown.Menu>
                            <Dropdown.Item 
                                as={ Link } 
                                to={`/dashboard/person/edit/${data._id}`}
                                icon='pencil' 
                                text='Edit Person'
                            /> 

                            <Dropdown.Divider/>

                            <Dropdown.Item 
                                onClick={ handleDeletePerson }
                                icon='trash' 
                                text='Delete Person'
                            />

                        </Dropdown.Menu>
                    </Dropdown>
                </Label>
                )
            }

            <Card.Content>

                <Header 
                    as="h5" 
                    content = { data.fullname ? data.fullname : ""}
                    subheader = { data.fullname ? data.fullname : "" }
                />

            </Card.Content>
        </Card>

    </Grid.Column>

);



export default personCard;
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header, Image, Label, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const MovieCardSemantic  = props => {

    return (
        
        <div>
            <Card>
                <Card>
                    <Image
                        as={Link} 
                        to={`/movie/${props._id}`}
                        fluid
                        label={
                            {
                                color:'black',
                                icon: "star",
                                attached : "bottom",
                                content: `IMBD : ${ props.imbd_rating ? props.imbd_rating : "" }`
                            }
                        }
                        src={ props.cover ? props.cover : "..." }
                    />

                    <Label attached="top right" color={"red"} size={"mini"}>                    
                        <Dropdown item icon={"ellipsis horizontal"} pointing="top right">
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    as={ Link } 
                                    to={`/movie/${props._id}`}
                                    icon='pencil' 
                                    text='Edit Movie'
                                /> 

                                <Dropdown.Divider/>

                                <Dropdown.Item 
                                    onClick={() => props.deleteButton(props._id)}
                                    icon='trash' 
                                    text='Delete Movie'
                                />

                            </Dropdown.Menu>
                        </Dropdown>
                    </Label>

                    <Card.Content>

                        <Header 
                            as="h5" 
                            content = { props.titleTr ? props.titleTr : ""}
                            subheader = { props.title ? props.title : "" }
                        />

                    </Card.Content>
                </Card>
            </Card>
        </div>
    );
};


MovieCardSemantic.propTypes = {
    _id:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleTr: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    imbd_rating: PropTypes.string.isRequired
};

export default MovieCardSemantic;

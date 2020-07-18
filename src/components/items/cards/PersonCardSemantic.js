import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header, Image, Label, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';



const PersonCardSemantic  = props => {

    return (
        
        <div>
            <Card>
                <Card>
                    <Image
                        as={Link} 
                        to={`/person/${props._id}`}
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
                                    to={`/dashboard/person/edit/${props._id}`}
                                    icon='pencil' 
                                    text='Edit Person'
                                /> 

                                <Dropdown.Divider/>

                                <Dropdown.Item 
                                    onClick={() => props.deleteButton(props._id)}
                                    icon='trash' 
                                    text='Delete Person'
                                />

                            </Dropdown.Menu>
                        </Dropdown>
                    </Label>

                    <Card.Content>

                        <Header 
                            as="h5" 
                            content = { props.fullname ? props.fullname : ""}
                            subheader = { props.fullname ? props.fullname : "" }
                        />

                    </Card.Content>
                </Card>
            </Card>
        </div>
    );
};


PersonCardSemantic.propTypes = {
    _id:PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    titleTr: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    imbd_rating: PropTypes.string.isRequired
};

export default PersonCardSemantic;

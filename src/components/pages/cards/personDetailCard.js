import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Grid, Segment, Card, Image, Statistic } from 'semantic-ui-react';
import { formatDate, calculateAge } from '../../../config/helpers';
import { Link } from 'react-router-dom';

/** CSS Files */
import './PersonDetailCard.css';


const personDetailCard  = ({ personData }) => {


const filmographyData = Array.from(personData.filmography);
const directedMoviesData = personData.directedMovies ? Array.from(personData.directedMovies) : [];

    return (      
        <div>

            <Container className="persondetailcard">

                <Grid stackable centered columns={2}>                  

                    <Grid.Row className="infoContainer">

                        <Image
                            className="infoContainerImg"
                            //src = { personData.cover }
                            src="https://image.tmdb.org/t/p/original/fab7CdKtXSWov5h1ZnrYcWl1ROx.jpg"
                        />

                        <Segment className="personInfo">
                            <Grid stackable>
                                <Grid.Column width={12} floated="left" >

                                    <Header className="personInfoTitle" textAlign="left">

                                        { personData.fullname }

                                    </Header>


                                </Grid.Column>
                                
                                <Grid.Column width={4}>


                                    <Segment basic className="statistic2">
                                    
                                        <Statistic.Group inverted color='yellow' className="statistic2Group">
                                            <Statistic horizontal className="statistic2Box">
                                                <Statistic.Label><span className="statistic2Label">Yönettiği<br/>Film Sayısı</span></Statistic.Label>
                                                <Statistic.Value><span className="statistic2Value">{ directedMoviesData.length }</span></Statistic.Value>
                                                
                                            </Statistic>
                                            <Statistic horizontal className="statistic2Box">
                                                <Statistic.Label><span className="statistic2Label">Rol Aldığı <br/> Film Sayısı</span></Statistic.Label>
                                                <Statistic.Value><span className="statistic2Value">{ filmographyData.length }</span></Statistic.Value>
                                            </Statistic>
                                        </Statistic.Group>
                                    </Segment>

                                </Grid.Column>

                            </Grid>
                        </Segment>

                    </Grid.Row>
                    
                    <Grid.Row className="detailContainer" >

                        <Grid.Column width={10}>

                            <Segment basic>

                                <Header size="medium" className="personDetailTitle">
                                    {personData.fullname}
                                </Header>                               

                            </Segment>

                            <Segment basic>
                                <Container textAlign='justified' className="personDetailSynopsis">
                                    Doğum Günü - { `${formatDate(personData.birth)} ${calculateAge(personData.birth)}` }
                                </Container>
                            </Segment>

                            <Segment basic>

                                <Container textAlign='justified' className="personDetailSynopsis">
                                    { personData.bio }
                                </Container>
                                
                            </Segment>                                                                          

                            {/* <Segment basic>
                                <Card fluid>

                                    <Embed
                                        autoplay={true}
                                        color='black'
                                        source='youtube'
                                        id={trailerVideoUrl}
                                        placeholder={trailerImageUrl}
                                        aspectRatio='16:9'
                                        hd={true}
                                        iframe={
                                        {
                                            allowFullScreen: true,
                                            style: {
                                                padding: 0
                                            },
                                        }}
                                    /> 

                                </Card>
                            </Segment> */}

                        </Grid.Column>
                        
                        <Grid.Column width={6}>

                            <Segment basic>

                                <Card fluid>                      
                                    <Image
                                        fluid
                                        src={ personData.cover ? personData.cover : "..." }
                                    />
                                </Card>


                            </Segment>

                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row className="castContainer">


                        <Grid.Column width={16}>

                            <Segment basic>

                                <Header size="medium"  className="castTitle">
                                    {directedMoviesData.length >= 1 ? "YÖNETTİĞİ FİLMLER" : "ROL ALDIĞI FİLMLER"} 
                                </Header>
                            </Segment>  

                            <Segment basic> 
                                    
                                <Card.Group itemsPerRow={8} stackable>
                                    {
                                        directedMoviesData.map((item) => 
                                            <Card key={ item._id }
                                                as={Link}
                                                to={`/movie/${item._id}`}
                                                image= {item.cover}
                                                header = { item.titleTr } 
                                                meta = "Director"                                   
                                            
                                            />
                                        )
                                    }
                                    {                                    
                                        filmographyData.map((item) => 
                                            <Card key = { item._id}
                                                as={Link}
                                                to={`/movie/${item._id}`}
                                                image= { item.cover }
                                                header = { `${item.titleTr} (${item.relase_year})` }
                                                meta = ""
                                            />
                                        )
                                    }
                                </Card.Group>

                            </Segment>

                        </Grid.Column>


                    </Grid.Row>
                    
                    {/* <Grid.Row className="imageContainer">

                        <Grid.Column width={16}>

                            <Segment basic>
                                <Header size="medium" className="castTitle">
                                    {"IMAGES"}
                                </Header>
                            </Segment>  

                            <Segment basic>   
                                <Card.Group itemsPerRow={3} stackable>
                                    {                                    
                                        images.map((image) => 
                                            <Card 
                                                key = { image._id}
                                                image= { image.thumbUrl }
                                                href={image.url}
                                                target='_blank'
                                                //header = { image.title }
                                                //meta = ""
                                            />

                                        )
                                    }
                                </Card.Group>
                            </Segment>

                        </Grid.Column>

                    </Grid.Row> */}

                </Grid>

            </Container>

        </div>
    );
};


personDetailCard.propTypes = {

    personData: PropTypes.object.isRequired

};

export default personDetailCard;



import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Label, Grid, Segment, Card, Image, Embed  } from 'semantic-ui-react';

/** CSS Files */
import './MovieDetailCard.css';



const movieDetailCard  = ({ movieData }) => {



    const genres = Array.from(movieData.genres);
    const directors = Array.from(movieData.director);
    const persons = Array.from(movieData.cast);
    const images = Array.from(movieData.images);
    const videos = Array.from(movieData.videos);

    // Container Image Cover
    const bgImage = images.map( item => {
        return item.url
    });
    const bgImageUrl = bgImage[Math.floor(Math.random() * bgImage.length)];

    // Trailer Image Placeholder
     const trailerImage = images.map( item => {
        return item.thumbUrl
    });
    const trailerImageUrl = trailerImage[Math.floor(Math.random() * trailerImage.length)]

    // Trailer Image Placeholder
    const trailerVideo = videos.map( item => {
        return item.ytid
    });
    const trailerVideoUrl = trailerVideo[Math.floor(Math.random() * trailerVideo.length)]


    return (
            
        <div>
            <Container className="moviedetailcard">

                <Grid stackable centered columns={2}>                  

                    <Grid.Row className="infoContainer">

                        <Image
                            className="infoContainerImg"
                            src={bgImageUrl}
                        />

                        <Segment className="movieInfo">
                            <Grid stackable>
                                <Grid.Column width={10} floated="left" >

                                    <Header className="movieInfoTitle" textAlign="left">

                                        { movieData.titleTr }

                                        <Header.Subheader>
                                            <Label.Group>
                                                <Label className="movieInfoTag" >{ movieData.relase_year}</Label>
                                                <Label className="movieInfoTag" >{ movieData.duration } Min</Label>
                                                {                                    
                                                    genres.map((genre) =>
                                                        <Label className="movieInfoTag" key={genre}>{ genre }</Label>
                                                    )
                                                }
                                            </Label.Group>
                                        </Header.Subheader>
                                    </Header>


                                </Grid.Column>


                                <Grid.Column width={6}>
                                    
                                    <Label basic circular className="movieInfoRating" size="large">

                                        <Label
                                            basic 
                                            size='massive'
                                            className="movieInfoRatingLabel" 
                                            icon='star'
                                        />                            

                                        <Label className="movieInfoRatingText" size="massive">

                                            { movieData.imbd_rating }

                                            <Label className="movieInfoRatingText movieInfoRatingSpan" size="medium" basic content=" / 10"/>
                                            
                                        </Label>

                                    </Label>

                                </Grid.Column>
                            </Grid>
                        </Segment>

                    </Grid.Row>
                    
                    <Grid.Row className="detailContainer" >

                        <Grid.Column width={10}>

                            <Segment basic>

                                <Header size="medium" className="movieDetailTitle">
                                    {movieData.title}
                                </Header>                               

                            </Segment>

                            <Segment basic>

                                <Container textAlign='justified' className="movieDetailSynopsis">
                                    { movieData.synopsis }
                                </Container>
                                
                            </Segment>                                                                          

                            <Segment basic>
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
                            </Segment>

                        </Grid.Column>
                        
                        <Grid.Column width={6}>

                            <Segment basic>

                                <Card fluid>                      
                                    <Image
                                        fluid
                                        label={{ 
                                            as:'a', 
                                            ribbon:'right', 
                                            icon: 'add', 
                                            content:'Add to Watchlist',
                                            size: 'large',
                                            className:'addWatclistButton'
                                        }}
                                        src={ movieData.cover ? movieData.cover : "..." }
                                    />
                                </Card>


                            </Segment>

                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row className="castContainer">


                        <Grid.Column width={16}>

                            <Segment basic>

                                <Header size="medium"  className="castTitle">
                                    YÖNETMEN VE BAŞROL OYUNCULARI
                                </Header>
                            </Segment>  

                            <Segment basic> 
                                    
                                <Card.Group itemsPerRow={8} stackable>
                                    {
                                        directors.map((director) => 
                                            <Card key={ director._id }
                                                image= {director.cover}
                                                header = { director.fullname } 
                                                meta = "Director"                                   
                                            
                                            />
                                        )
                                    }
                                    {                                    
                                        persons.map((person) => 
                                            <Card key = { person._id}
                                                image= { person.cover }
                                                header = { person.fullname }
                                                meta = ""
                                            />
                                        )
                                    }
                                </Card.Group>

                            </Segment>

                        </Grid.Column>

    
                    </Grid.Row>
                    
                    <Grid.Row className="imageContainer">

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

                    </Grid.Row>

                </Grid>
                
            </Container>
        </div>
    );
};


movieDetailCard.propTypes = {

    movieData: PropTypes.object.isRequired

};

export default movieDetailCard;



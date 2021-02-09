import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

/** Jwt Decode */
import jwt_decode from 'jwt-decode';


import { timer } from '../items/timer';



class homePage extends Component
{

    render() 
    {

        const token = localStorage.getItem('jwtToken');
        const datas = token ? jwt_decode(token) : false;
        const { exp } = datas;
        const dt = Date.now();
        const dateNowMs = dt/1000;      

        if ( exp <= dateNowMs) {
            localStorage.clear();
        }

        const time = timer();


        return (
            <div>
                <Container style={{ marginTop: '3em', marginBottom: '2em', minHeight: '25em' }}>
                    {time && token ? time : "Lütfen Oturum Açın." }
                </Container>                  
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
            
    }
};

export default connect(mapStateToProps)(homePage);

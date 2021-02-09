import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Grid,Header, Image, Segment, Form, Message, Button } from 'semantic-ui-react';

/** Actions */
import { authAction } from '../../_core/_actions/authAction';
import { siteMeta } from '../../config/config';


export default function LoginPage()
{

    const [formData, setFormData] = useState({
        user_name: '',
        user_password: ''
    });

    const { user_name, user_password } = formData;

    
    const loginPending = useSelector(state => state.authReducer.loginPending);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {

        e.preventDefault();
                      
        setSubmitted(true);
       
        if (user_name && user_password) {
            dispatch(authAction.onLogin(formData));

        } 
    }


    return (

        <div>
            <Container style={{ marginTop: '3em', marginBottom: '2em', minHeight: '25em' }}> 
            <Grid style={{ height: '70vh' }} verticalAlign='center'>
                <Grid.Column style={{ maxWidth: 450 }}>

                <Header as='h3' color='red' textAlign='center'>
                    <Image size="mini" src={siteMeta.logo} /> Sign in to Moviepedia
                </Header>

                    <Form name="form" size='large' onSubmit={handleSubmit} loading={loginPending} >

                        <Segment> 
                            <Form.Input
                                fluid
                                name="user_name"
                                value={user_name}
                                onChange={handleChange}
                                label='Kullanıcı Adınız'
                                placeholder='Kullanıcı Adınız'
                                id='form-input-user_name'
                                error={submitted && !user_name && ({content:"Username is required"})}  
                            />

                            <Form.Input
                                fluid
                                type="password"
                                name="user_password"
                                value={user_password}
                                onChange={handleChange}
                                label='Şifreniz'
                                placeholder='Şifreniz'
                                id='form-input-user_password'
                                error={submitted && !user_password && ({content:"Password is required"})}  
                            />

                            <Button primary size='large' loading={loginPending} fluid>Giriş Yap</Button>
                        </Segment>
                    </Form>

                    <Message>
                        Üye Değil mısiniz?  <Link to="/register"> Kayıt olun</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            </Container>
        </div>

    );

}
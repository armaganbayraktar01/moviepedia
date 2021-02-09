import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

/** CSS Files */
import './App.css';
import 'semantic-ui-css/semantic.min.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App-theme.css';

/** Config */
import {  navbarMenus } from './config/config';


/** Helpers */
import { history } from './_helpers/history';
import { PrivateRoute } from './_helpers/route';

/** Actions */
import { alertActions } from './_core/_actions/alertAction';

/** Components */

import FooterContainer from './components/_containers/FooterContainer';
import ResponsiveContainer from './components/_containers/ResponsiveContainer';
import AlertContainer from './components/_containers/AlertContainer';

import { Container } from 'semantic-ui-react';


/** Body */


class App extends Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }



   

    render()
    {
        
      const {adminpage, profilepage, loginpage, registerpage, homepage, moviespage, directorspage, castpage, addmoviepage, addpersonpage, moviedetailpage, persondetailpage,
        editmoviepage } = navbarMenus;
     

        return (

            <div className="App">

                {

                    <ResponsiveContainer>

                        <AlertContainer alertProps = {this.props.alert}/>       

                        <Container text style={{ minHeight: '25em' }}>
                        
                            <Switch>
                                <Route exact path={ loginpage.path} component={ loginpage.component}/>
                                <Route exact path={ registerpage.path} component={ registerpage.component}/>
                                <PrivateRoute exact path={ adminpage.path} component={ adminpage.component} />
                                <PrivateRoute exact path={ profilepage.path} component={ profilepage.component} />
                                <Route exact path={ homepage.path} component={ homepage.component} />
                                <Route exact path={ moviespage.path} component={ moviespage.component} />
                                <Route exact path={ castpage.path} component={ castpage.component} />
                                <Route exact path={ directorspage.path} component={ directorspage.component} />
                                <Route exact path={ moviedetailpage.path} component={ moviedetailpage.component} />
                                <Route exact path={ persondetailpage.path} component={ persondetailpage.component} />
                                <PrivateRoute exact path={ addmoviepage.path} component={ addmoviepage.component} />
                                <PrivateRoute exact path={ editmoviepage.path} component={ editmoviepage.component} />
                                <PrivateRoute exact path={ addpersonpage.path} component={ addpersonpage.component} />

                            </Switch>

                        </Container>

                    </ResponsiveContainer>
                 }

                <FooterContainer/>

        
            </div>
        );
    }
};


const mapStateToProps = ({ alert }) => {
    return {
        alert          
    }
};

const mapDispatchToProps = {
    clearAlerts: alertActions.clear
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/** CSS Files */
import './App.css';
import 'semantic-ui-css/semantic.min.css' ;
import './App-theme.css';
/** Configration */
import { navbarMenus } from './config/config';

/** Components */
import { Container } from 'semantic-ui-react';

/** Components */
import Header from './components/static_pages/Header';
import Footer from './components/static_pages/Footer';

/** Body */

class App extends Component {

  render()
  {
    return (
      <div className="App">
        <Header/>
        <Container text >
          <Route exact path={navbarMenus.homepage.path} component={navbarMenus.homepage.component}></Route>
          <Route exact path={navbarMenus.moviespage.path} component={navbarMenus.moviespage.component}></Route>
          <Route exact path={navbarMenus.moviedetailpage.path} component={navbarMenus.moviedetailpage.component}></Route>
        </Container>
        <Footer/>        
      </div>
    );
  }

}

export default App;

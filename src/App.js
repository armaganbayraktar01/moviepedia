import React from 'react';
import { Route } from 'react-router-dom';

/** CSS Files */
import './App.css';
import 'semantic-ui-css/semantic.min.css' ;

/** Configration */
import { navbarMenus } from './config/config';

/** Components */
import { Container } from 'semantic-ui-react';

/** Body */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App Created
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';

import Home from './components/home.component'
import Notes from './components/notes.component';
import Create from './components/create.component';
import Navbar from './components/navbar.component';
 
class App extends Component {
  
  config = {
    issuer: 'https://dev-658371.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oa95rrts6Lj7TVtZ4x6',
    pkce: true
  }

  render() {
    return (
      <Router>
        <Security {...this.config}>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path='/notes' exact component={Notes}/>
          <Route path='/create' exact component={Create}/>
          <Route path='/implicit/callback' component={LoginCallback} />
        </Security>
      </Router>
    );
  }
}
 
export default App;





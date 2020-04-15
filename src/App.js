import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Main Components
import Home from './components/home.component';
import Create from './components/create.component';
import Note from './components/note.component';
//Element Components
import Navbar from './components/navbar.component';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./index.css";



class App extends React.Component{
  render(){
    return(
      <Router>
 
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />

        <Route path="/create" exact component={Create} />
        <Route path="/view/:id" exact component={Note} />
        
      </Router>
    );
  }
}

export default App;

import React from 'react';
import "./bootstrap.css"
import Navbar from './components/navbar.component'
import Create from './components/create.component'


class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Create/>
      </div>

    );
  }
}

export default App;

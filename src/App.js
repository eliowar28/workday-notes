import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="workday-notes">
      <h1>Hello Test</h1>
    </div>
  );
}

function Hi({name}){
  return (
  <div className="container">
  <div className="card">
    <h3>{name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Laudantium quisquam eum delectus aspernatur a. Itaque dolorem 
      nihil earum sed,aut temporibus in, velit facilis magni delectus 
      provident ipsum excepturi! Minima?
    </p>
  </div>

  <div className="card">
    <h3>{name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Laudantium quisquam eum delectus aspernatur a. Itaque dolorem 
      nihil earum sed,aut temporibus in, velit facilis magni delectus 
      provident ipsum excepturi! Minima?
    </p>
  </div>
  <div className="card">
    <h3>{name}</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Laudantium quisquam eum delectus aspernatur a. Itaque dolorem 
      nihil earum sed,aut temporibus in, velit facilis magni delectus 
      provident ipsum excepturi! Minima?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Laudantium quisquam eum delectus aspernatur a. Itaque dolorem 
      nihil earum sed,aut temporibus in, velit facilis magni delectus 
      provident ipsum excepturi! Minima?
    </p>
</div>
</div>
    
  );
}

export default Hi;

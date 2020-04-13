import React from 'react';
import MyButton from './components/mybutton'

class myComponent extends React.Component{
  render(){
    return(
      <div>
        <h5> this is my main component, below is the button</h5>
        <MyButton/>
      </div>
    );
  }
}

export default myComponent;

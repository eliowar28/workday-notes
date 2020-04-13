import React, {Component} from 'react';

class MyButton extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter : 1
        }




    }

    handleClick = () => {
        this.setState( prevState => ({
            counter : prevState.counter + 1
        }));
    }

    render(){
        return(
           
        <button onClick={this.handleClick}>{this.state.counter}</button>
   
        );
    }
}

export default MyButton;
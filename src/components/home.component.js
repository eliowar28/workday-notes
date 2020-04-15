import React, {Component} from 'react';
import axios from 'axios';
import CardNote from './cardnote.component';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/notes')
            .then(res => {
                const notes = res.data;
                this.setState({notes});
            });

    }

    

    render(){
        return(
        <div className="container">
        <div className="cardnote-container">
            {this.state.notes.map((note)=>
               <CardNote mynote={note}/>
            )}
            
        </div>
        </div>

        
        );
    }
}

export default Home;
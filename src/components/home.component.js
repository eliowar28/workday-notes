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

    delete = (id) => {
        const deletenote = `http://localhost:5000/notes/${id}`
        axios.delete(deletenote)
        .then(()=> {
            const notes = this.state.notes.filter((note)=> note._id != id);
            this.setState({notes});
        })
        .catch(error=> console.log(error));
        
    }
    

    render(){
        return(
        <div className="container">
        <div className="cardnote-container">
            {this.state.notes.map((note)=>
               <CardNote mynote={note} delete={()=> this.delete(note._id)}/>
            )}
            
        </div>
        </div>

        
        );
    }
}

export default Home;
import React,{Component} from 'react';
import Axios from 'axios';

class Note extends Component{
    constructor(props){
        super(props);
        this.location = 'http://localhost:5000/notes/' + props.location.pathname.split("/").pop()
        this.state = {
            note: {}
        }

    }

    componentDidMount(){
        Axios.get(this.location).then(res =>{
            const note = res.data;
            this.setState({note:note});        
        });
        console.log(this.location)
    }
    render(){
    return(
        <div className="container">
            <h3 className="font-weight-bold">{this.state.note.title}</h3>
            <hr/>
            <p>{this.state.note.body}</p>
        </div>
    
    );
    }
}

export default Note;
import React,{Component} from 'react';
import axios from 'axios';
import Body from './notebody.component';

class Note extends Component{
    constructor(props){
        super(props);
        this.location = 'http://localhost:5000/notes/' + props.location.pathname.split("/").pop()
        this.state = {
            note: {}
        }

    }

    componentDidMount(){
        axios.get(this.location).then(res =>{
            const note = res.data;
            this.setState({note:note});        
        });
        console.log(this.state)
    }
    render(){
    return(
        <div className="container" style={{marginTop:'100px'}}>
            <h3 className="font-weight-bold">{this.state.note.title}</h3>
            <hr/>
            <Body body={this.state.note.body} />
        </div>
    
    );
    }
}

export default Note;
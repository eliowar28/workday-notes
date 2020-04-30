import React,{Component} from 'react';
import axios from 'axios';
import Body from './notebody.component';

class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: {}
        }

    }

    componentDidMount(){
       const {id} = this.props.match.params
        axios.get(`http://localhost:5000/notes/${id}`).then(res =>{
            const note = res.data;
            this.setState({note:note});        
        });

    }
    render(){
    return(
        <div className="container" style={{marginTop:'100px'}}>
            <h3 className="font-weight-bold">{this.state.note.title}</h3>
            <hr/>
            <img className="textWrap" src={`http://localhost:5000/${this.state.note.file}`}/>
            <Body body={this.state.note.body}/>
            
        </div>
    
    );
    }
}

export default Note;
import React,{Component} from 'react';
import Axios from 'axios';

class Note extends Component{
    constructor(props){
        super(props);
        this.location = 'http://localhost:5000/notes' + props.location.pathname;
        this.state = {
            note: {}
        }

    }

    componentDidMount(){
        Axios.get(this.location).then(res =>{
            const note = res.data;
            this.setState({note:note});        
        });
    }
    render(){
        return(<h3>This is my Note</h3>);
    }
}

export default Note;
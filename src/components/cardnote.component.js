import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Road from '../road.jpg'
import {Button} from 'react-bootstrap';
import axios from 'axios';

class CardNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            note: props.mynote
        }
        
        this.view = `/view/${this.state.note._id}`;
        this.deletenote = `http://localhost:5000/notes/${this.state.note._id}`; 
        
    }
    


    render(){
        return(
    <div className="cardnote">
        <div className="overlay cardimg">
        <img className="card-img-top" src={Road} alt="this is my road"/>
        <div className="mask rgba-white-slight"></div>
        </div>
        <div className="card-body elegant-color white-text rounded-bottom d-flex flex-column">
        <div>
            <h5 className="card-title">{this.state.note.title}</h5>
            <hr className="hr-light"/>
            <p className="card-text white-text mb-4">{this.state.note.body.substr(0,100)}</p>
        </div>
        <div className="justify-self-baseline d-flex flex-row">
            <Button variant="danger" onClick={this.props.delete}>
                    delete  <i className="fas fa-trash"></i>

            </Button>
            <Button variant="success" href={this.view}>
            <h6>Read More  <i className="fas fa-angle-double-right"></i></h6>
            </Button>
            </div>
            </div>
        </div>
  
);
    }
}

export default CardNote;
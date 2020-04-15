import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Road from '../road.jpg'

class CardNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            note: props.mynote
        }
        
        this.link = "/view/" + this.state.note._id;
    }
    


    render(){
        return(
    <div className="cardnote">
        <div className="view overlay">
        <img className="card-img-top" src={Road} alt="this is my road"/>
       
        <div className="mask rgba-white-slight"></div>
      
        </div>
        <div className="card-body elegant-color white-text rounded-bottom d-flex flex-column">
        <div>
            <h5 className="card-title">{this.state.note.title}</h5>
            <hr className="hr-light"/>
            <p className="card-text white-text mb-4">{this.state.note.body.substr(0,100)}</p>
        </div>
        <div className="justify-self-baseline">
            <Link to={this.link} className="white-text d-flex justify-content-end">
            <h6>Read More  <i class="fas fa-angle-double-right"></i></h6>
            </Link>
        </div>
        
        

        </div>
    </div>
);
    }
}

export default CardNote;
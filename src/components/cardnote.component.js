import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import Body from './notebody.component';

class CardNote extends Component{
    constructor(props){
        super(props)        
        this.view = `/view/${this.props.note._id}`;
        this.deletenote = `http://localhost:5000/notes/${this.props.note._id}`; 
        this.image = `http://localhost:5000/${this.props.note.file}`; 
        this.notebody = this.props.note.body.replace(/<\/?[^>]+(>|$)/g, "")
   
    
    }



    render(){
        return(

        <div className="mycard-container">
            <img src={this.image} alt="" className="mycard-photo"/> 
            <div className="mycard">
                <div className="mycard-body">
                    <h4 className="text-center font-weight-bold">{this.props.note.title}</h4>
                    <Body body={this.notebody.substr(0,100)}/>

                </div>
                <Button className="btn btn-info btn-md" href={this.view}><strong>Read more</strong></Button> 
                <div className="mycard-footer">
                    <div>
                        <small className="white-text"><strong><i className="far fa-clock pr-1 white-text"></i>{this.props.note.date.slice(0,10)}</strong></small>
                    </div>
                    <div>
                        <small><strong><a onClick={this.props.delete} className="white-text"><i className="fas fa-trash pr-1">
                        </i>Delete
                        </a></strong></small>
                    </div>
                </div> 
            </div>

        </div>
            
        );
    }
}

export default CardNote;


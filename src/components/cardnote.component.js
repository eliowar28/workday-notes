import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import Body from './notebody.component';

class CardNote extends Component{
    constructor(props){
        super(props)        
        this.view = `/view/${this.props.note._id}`;
        this.deletenote = `http://localhost:5000/notes/${this.props.note._id}`; 
        this.image = `http://localhost:5000/${this.props.note.file}`; 
    
    }

    render(){
        return(
            
            <div className="cardnote mt-5">
                <div className="view overlay">
                <img className="card-img-top" src={this.image} alt="My Journey"/>
                    <a>
                    <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.note.title}</h4>
                    <hr/>
                    <p className="card-text"><Body body={this.props.note.body.substr(0,100)}/></p>
                    <Button className="btn btn-info btn-md" href={this.view}><strong>Read more</strong></Button>
                </div>

                <div className="rounded-bottom pt-3 bg-dark " >
                    <div className="d-flex justify-content-around align-items-center mb-3">
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


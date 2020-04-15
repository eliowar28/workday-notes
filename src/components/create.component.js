import React, {Component} from 'react';
import axios from 'axios';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:''
        }
    }

    onChangeTitle = e => {
       
        this.setState({
            title: e.target.value
        });
    }

    onChangeBody = e => {
       
        this.setState({
            body: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body
        }
        axios.post('http://localhost:5000/notes/create', note)
        .then(res => console.log(res));
    }

    render(){
        return(
            <div className="container mt-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Insert Title" value={this.state.title} onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                    <label for="body">Body</label>
                    <textarea className="form-control" id="body" rows="8" value={this.state.body} onChange={this.onChangeBody}></textarea>
                    </div>
                    <div className="d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-dark ">Guardar</button>
                    </div>
                </form>
            </div>
        );          
    }
}

export default Create;
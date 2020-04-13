import React, {Component} from 'react';

class Create extends Component{

    render(){
        return(
            <div className="container mt-5">
                <form>
                <div className="form-group">
                <label for="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Insert Title"/>
                </div>
                <div className="form-group">
                <label for="body">Body</label>
                <textarea className="form-control" id="body" rows="8"></textarea>
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
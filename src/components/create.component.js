import React, {Component} from 'react';
import axios from 'axios';
import {Container,Form,Button} from 'react-bootstrap';

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
        .then((res) => window.location = "/")
        .catch((error)=> alert(error));

        
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label><h6 className="font-weight-bold">Title</h6></Form.Label>
                        <Form.Control type="text" onChange={this.onChangeTitle}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h6 className="font-weight-bold">Body</h6></Form.Label>
                        <Form.Control  as="textarea" rows="7" onChange={this.onChangeBody}></Form.Control>
                    </Form.Group>
                    <div className="d-flex flex-row-reverse">
                <Button variant="dark" type="submit">
                    Save Note
                </Button>
                </div>
                </Form>

            </Container>
        );          
    }
}

export default Create;
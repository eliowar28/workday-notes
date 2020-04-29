import React, {Component} from 'react';
import {Container,Form,Button} from 'react-bootstrap';
import Editor from './editor.component';
import { Redirect, useHistory } from 'react-router-dom';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:'',
            file: '',
            filename:'Choose a Image',
            imagePreviewUrl: null,
            redirect:false
        }
    }

    onChangeTitle = e => {
       
        this.setState({
            title: e.target.value
        });
    }

    onChangeBody = e => {
       console.log(e);
       this.setState({
            body: e
        });
    }

    onChangeImage = e => {
        let file = e.target.files[0];
        this.setState({
            file: file,
            filename: file.name,
            imagePreviewUrl: URL.createObjectURL(file)

        });
        

        
     
    }


    onSubmit = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('image',this.state.file, Date.now() + this.state.file.name);
        formData.append('title', this.state.title);
        formData.append('body',this.state.body);
        
        fetch('http://localhost:5000/notes/create',{
            method: 'POST',
            body: formData
        })
        .then( res => res.json())
        .then( res => console.log(res))
        .then( () => this.setState({
            redirect:true
        }))
        .catch(err => console.log(err));

        
        

        
    }

    render(){
        let imagePreview;

        if(this.state.imagePreviewUrl){
            imagePreview = <img src={this.state.imagePreviewUrl} id="imageObject" alt=""/>
        }

        if(this.state.redirect){
            return <Redirect to="/notes" />
        }
        
        return(

            <Container style={{marginTop:'100px'}}>
                <Form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                         
                        <Form.Group>
                            <Form.Label><h6 className="font-weight-bold">Image</h6></Form.Label>
                                <div id="imageContainer" className="z-depth-1-half">
                                    {imagePreview}
                                </div>
                                <div className="custom-file">
                                    <Form.Control type="file" className="custom-file-input" id="customFile" onChange={this.onChangeImage}/>
                                    <label className="custom-file-label" for="customFile">{this.state.filename}</label>
                                </div>

                        </Form.Group>
                
                        </div>
                        <div className="col-md-8">
                            <Form.Group>
                                <Form.Label><h6 className="font-weight-bold">Title</h6></Form.Label>
                                <Form.Control type="text" onChange={this.onChangeTitle}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><h6 className="font-weight-bold">Body</h6></Form.Label>
                                <Editor onChange={this.onChangeBody} />   
                            </Form.Group>
                            

                                
                                

                            
                        </div>
                    </div>
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
import React, {Component} from 'react';
import axios from 'axios';
import CardNote from './cardnote.component';
import { withOktaAuth} from '@okta/okta-react';

export default withOktaAuth(class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
    }

    getUser = async () =>{
        let user = await this.props.authService.getUser();
        return user;
    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/notes')
            .then(res => {
                const notes = res.data;
                this.setState({notes}); 
            });
        this.props.authService.getUser()
        .then((data) => console.log(data));
    }

    delete = (id) => {
        const deletenote = `http://localhost:5000/notes/${id}`
        axios.delete(deletenote)
        .then((res)=> {
            const notes = res.data;
            this.setState({notes});
        })
        .catch(error=> console.log(error));
        
    }
    

    render(){
        return(
        <div className="container mt-5">
        <div className="mycard-deck">
            {this.state.notes.map((note)=>
               <CardNote note={note} delete={()=> this.delete(note._id)}/>
            )}
            
        </div>
        </div>

        
        );
    }
})


import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import {withOktaAuth} from '@okta/okta-react';

export default withOktaAuth(class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            authenticated: null
        }

        this.checkAuthentication();
    }

    componentDidMount(){
        console.log(this.props);
    }

    checkAuthentication = async () => {
        const authenticated = await this.props.authState.isAuthenticated;
        if(authenticated !== this.state.authenticated) {
            this.setState({
                authenticated
            });
        }
    }

    componentDidUpdate(){
        this.checkAuthentication();
    }
    
    onSuccess = (res) => {
        if(res.status === 'SUCCESS'){
            return this.props.authService.redirect({
                sessionToken: res.session.token
            })
        } else {
            console.log('failed');
        }
    }

    onError = (err) => {
        console.log('error loggin in ', err);
    }

    render(){
        if(this.state.authenticated === null) return null;
        return this.state.authenticated ?
        <Redirect to={{ pathname:"/"}} />:
        <OktaSignInWidget baseUrl={this.props.baseUrl} onSuccess={()=>this.onSuccess} onError={()=>this.onError}/>;
    }
});

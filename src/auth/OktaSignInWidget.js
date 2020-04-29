import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import '@okta/okta-signin-widget/dist/css/okta-theme.css'

export default class OktaSignInWidget extends Component{
    componentDidMount(){
        const el = ReactDOM.findDOMNode(this);
        this.widget = new OktaSignIn({
            baseUrl : this.props.baseUrl,
            authParams:{
                pkce:true
            }
        });
        console.log(this.widget.renderEL({el:el}, this.props.onSuccess, this.props.onError));

    }

    componentWillUnmount(){
        this.widget.remove();
    }

    render(){
        return <div />
    }
}
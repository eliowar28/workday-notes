import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import {Navbar,Container,Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default withOktaAuth(class MyNavbar extends Component{
  constructor(props){
    super(props)
  }

  login = async () => { this.props.authService.login('/'); }
  logout = async () => { this.props.authService.logout('/'); }

  render(){
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>Workday-Notes</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {this.props.authState.isAuthenticated && <Nav.Item><Nav.Link href="/notes" className="font-weight-bold">Notes</Nav.Link></Nav.Item>}
          {this.props.authState.isAuthenticated && <Nav.Item><Nav.Link href="/create" className="font-weight-bold">Create Note</Nav.Link></Nav.Item>}
          {this.props.authState.isAuthenticated && <Nav.Item><Nav.Link onClick={this.logout} className="font-weight-bold">Logout</Nav.Link></Nav.Item>}
          {!this.props.authState.isPending && !this.props.authState.isAuthenticated && <Nav.Item><Button onClick={this.login} className="font-weight-bold btn btn-outline-info">Login</Button></Nav.Item>}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
  }

})

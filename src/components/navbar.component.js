import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import {Navbar,Container,Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default withOktaAuth(class MyNavbar extends Component{

  login = async () => { this.props.authService.login('/'); }
  logout = async () => { this.props.authService.logout('/'); }

  render(){
    return(
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
    <Link to="/">
      <Navbar.Brand>
      <img
        alt=""
        src="../work-logo.svg"
        width="90"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      </Navbar.Brand>
    </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center justify-content-center">
          {this.props.authState.isAuthenticated && <Nav.Item><Nav.Link href="/notes" className="font-weight-bold">Notes</Nav.Link></Nav.Item>}
          {this.props.authState.isAuthenticated && <Nav.Item><Nav.Link href="/create" className="font-weight-bold">Create Note</Nav.Link></Nav.Item>}
          {this.props.authState.isAuthenticated && <Nav.Item><Button onClick={this.logout} className="font-weight-bold btn btn-outline-danger ml-5">Logout</Button></Nav.Item>}
          {!this.props.authState.isPending && !this.props.authState.isAuthenticated && <Nav.Item><Button onClick={this.login} className="font-weight-bold btn btn-outline-light">Login</Button></Nav.Item>}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
  }

})

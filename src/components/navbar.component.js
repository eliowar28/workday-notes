import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class MyNavbar extends Component{
    render(){
        return (  
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Link to="/"><Navbar.Brand>Workday-Notes</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item>
            <Nav.Link href="/create">Create Note</Nav.Link>
            </Nav.Item>
        
            </Nav>
            </Navbar.Collapse>
                </Container>
 
            </Navbar>
        );
    }

}

export default MyNavbar;
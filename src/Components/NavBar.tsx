import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar(props: any) {

    return (

        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="#home"><img src='./images/image 9.png' alt=""  width="30" height="24"/></Navbar.Brand>
                <h1 className="me-auto" >Upload X-Ray</h1>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        );
}


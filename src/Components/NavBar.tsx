import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import teeth from '../assets/image9.png';

export default function NavBar(props: any) {

    return (

        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="#home"><img src={teeth} alt=""  width="50" height="50"/></Navbar.Brand>
                <h1 className="me-auto">Upload X-Ray</h1>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Logout">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}


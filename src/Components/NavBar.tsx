import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';
import teeth from '../assets/image9.png';

export default function NavBar(props: any) {

    useLocation();

    const changeTitle = () => {
        switch (window.location.pathname) {
            case '/Register':
                return 'Register';
            case '/Login':
                return 'LogIn';
            case '/MainFunctions':
                return 'Main functionality';
            case '/ImageUpload':
                return 'Upload X-ray';
            case '/DisplayDection':
                return 'Display detection & report';
            case '/PatientRegister':
                return 'Register patient';
            case '/ViewPatient':
                return 'View patient data';
            case '/AboutUS':
                return 'About Us';
            case '/Feedback':
                return 'Feedback';
            default:
                return 'Home';
        }
    }

    let title = changeTitle();

    return (
        <Navbar className=''>
            <Navbar.Brand href="/"><img src={teeth} alt="" width="50" height="50" /></Navbar.Brand>
            <h2>{title}</h2>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#Logout">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}


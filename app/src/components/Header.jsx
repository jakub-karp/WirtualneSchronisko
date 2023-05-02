import React from 'react'
import logo from '../assets/logo.png';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";

const Header = () => {
  return (
    <Navbar  bg='light' expand="lg" sticky='top'>
        <Container fluid >
            <Navbar.Brand href='#'>
                <img src={logo} alt="logo" className="d-inline-block align-top logo"/>
                {' '}<div className='nameofproject'>Wirtualne schronisko</div> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav className="ml-auto my-lg-0 header" navbarScroll>
                    <Nav.Link href="/">Strona Główna</Nav.Link>
                    <Nav.Link href="/adopcja">Jak adoptować?</Nav.Link>
                    <NavDropdown title="Schroniska" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Schronisko w Toruniu</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Schronisko w Bydgoszczy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Schronisko w Krakowie
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                <Button variant="outline-warning" className='btnadoptuj mr-2' href='/adoptuj'>Adoptuj!</Button>
                <Button variant='outline-warning' className='btnlogin' href='/login'>
                        Logowanie
                        <FiLogIn className='login-icon' size='20' />
                </Button>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
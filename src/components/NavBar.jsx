import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Eraart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/printart">Print Art</Nav.Link>
            <Nav.Link href="/category/digitalart">Digital Art</Nav.Link>
            <Nav.Link href="/category/TShirt">T-Shirts Collections</Nav.Link>
          </Nav>
            <CartWidget/> 
        </Container>
      </Navbar>
   
);

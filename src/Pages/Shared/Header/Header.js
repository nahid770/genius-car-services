import { signOut } from 'firebase/auth';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../Images/Icon/logo.png'

const Header = () => {
  const [user]= useAuthState(auth)
  const handleSignout = ()=>{
    signOut(auth);
  }
    return (
        <div >
        <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link}  to="/">
          <img height={30} src={img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user && <>
              <Nav.Link as={Link} to="/addservice">Add service</Nav.Link>
              <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
              <Nav.Link as={Link} to="/orders">Oders</Nav.Link>
              </>
            }

            { user? 
                <button onClick={handleSignout} className='btn btn success'>Signout</button>
              :
              <Nav.Link eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      </div>
    );
};

export default Header;
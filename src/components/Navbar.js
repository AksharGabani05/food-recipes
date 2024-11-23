// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { logout, isAuthenticated, getUser } from '../utils/auth';
import { Container, Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap'; 

const Navbar = () => {
  const user = getUser();

  return (
    <BootstrapNavbar expand="lg" bg="primary" variant="dark" className="mb-4">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Food Recipes</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>

            {isAuthenticated() ? (
              <>
                <Nav.Item className="d-flex align-items-center">
                  <span className="text-white me-2">Welcome, {user.username}</span>
                  <Link to="/logout">
                    <Button variant="outline-light">Logout</Button>
                  </Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

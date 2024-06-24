import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const MainDashbord = () => {
  const location = useLocation();
  const { user } = location.state || { user: {} };

  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">GTX International School</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              
              {user.rollId && user.rollId.roll === 'admin' && (
                <>
                  <Nav.Link as={Link} to="/maindashbord">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/service">Service</Nav.Link>
                  <Nav.Link as={Link} to="/studentinfo">Student Info</Nav.Link>
                  <Nav.Link as={Link} to="/teacherinfo">Teacher Info</Nav.Link>
                  <Nav.Link as={Link} to="/admininfo">Admin</Nav.Link>
                </>
              )}
              {user.rollId && user.rollId.roll === 'teacher' && (
                <>
                  <Nav.Link as={Link} to="/maindashbord">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/service">Service</Nav.Link>
                  <Nav.Link as={Link} to="/teacherinfo">Teacher Info</Nav.Link>
                  <Nav.Link as={Link} to="/studentinfo">Student Info</Nav.Link>
                </>
              )}
              {user.rollId && user.rollId.roll === 'student' && (
                <>
                  <Nav.Link as={Link} to="/maindashbord">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/service">Service</Nav.Link>
                  <Nav.Link as={Link} to="/studentinfo">Student Info</Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p>Role: {user.rollId ? user.rollId.roll : "Unknown"}</p>
        {user.rollId && user.rollId.roll === 'admin' && <p>Admin specific content goes here...</p>}
        {user.rollId && user.rollId.roll === 'teacher' && <p>Teacher specific content goes here...</p>}
        {user.rollId && user.rollId.roll === 'student' && <p>Student specific content goes here...</p>}
      </div>
    </div>
  );
}

export default MainDashbord;

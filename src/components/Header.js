import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {

  return (
 <Navbar style={{position: "sticky"}} bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default Header;

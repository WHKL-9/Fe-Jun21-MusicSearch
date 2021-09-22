import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> 🎹 Music Dream Castle 🏰</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Hello, WH!</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

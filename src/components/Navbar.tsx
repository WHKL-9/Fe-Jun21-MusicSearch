import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/home">
        <Navbar.Brand href="#home"> 🎹 Music Dream Castle 🏰</Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Hello, WH!</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavHeader() {
  return (
    <nav className="bg-dark fs-5 pt-2 ps-5" style={{ height: "50px" }}>
      <Link className="m-1 link-light text-decoration-none" to="/">
        Home
      </Link>
      <Link className="m-1 link-light text-decoration-none" to="Authors">
        Authors
      </Link>
    </nav>
  );
}

export default NavHeader
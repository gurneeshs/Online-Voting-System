import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './CSS/Nav.css'

function AdminNavbar() {
  return (
    <Navbar expand="lg" className="Nav">
      {/* <Container className='Nav'>*/}
        <Navbar.Brand className ="Heading" href="/">Online Voting System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle'/> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Nav">
            <Nav.Link className="Nav-items" href="/Admin">Dashboard</Nav.Link>
            <Nav.Link className="Nav-items" href="/Voters">Voters</Nav.Link>
            <Nav.Link className="Nav-items" href="/Candidate">Candidates</Nav.Link>
            <Nav.Link className="Nav-items" href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNavbar;
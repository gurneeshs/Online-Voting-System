import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CSS/Nav.css'

function Nav_bar() {
  return (
    <Navbar expand="lg" className="Nav">
      <Container fluid>
        <Navbar.Brand href="#" className='Heading'>Online Voting System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 Nav-items-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="Nav-items" href="/" >Home</Nav.Link>
            <Nav.Link className="Nav-items" href="https://musical-pudding-460731.netlify.app/Signup">New Registration</Nav.Link>
            <Nav.Link className="Nav-items" href="https://musical-pudding-460731.netlify.app/Login">Login</Nav.Link>
            <Nav.Link className="Nav-items" href="https://musical-pudding-460731.netlify.app/Admin">Admin</Nav.Link>


            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
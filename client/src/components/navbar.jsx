import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    // to remove background

    <Container
      fluid
      style={{
        background: "gray",
        margin: 0,
        padding: 0,
        justifyContent: "space-around",
      }}
      className="shadow-sm flex-wrap"
    >
      <Navbar bg="magenta" className="bg-purple px-3" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">Vocabulary.ge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">მთავარი</Nav.Link>
              <Nav.Link href="words">სიტყვები</Nav.Link>
              <Nav.Link href="app">აპლიკაცია</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="bg-danger ">
          <Nav className="position-absolute end-0 px-4">
            <Nav.Link href="#home">შესვლა</Nav.Link>
            <Nav.Link href="#link">რეგისტრაცია</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>

    //   <br />

    //   <nav class="py-2 bg-body-tertiary border-bottom">
    //   <div class="container d-flex flex-wrap">
    //     <ul class="nav me-auto">
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Features</a></li>
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Pricing</a></li>
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">FAQs</a></li>
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">About</a></li>
    //     </ul>
    //     <ul class="nav">
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Login</a></li>
    //       <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Sign up</a></li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavBar;

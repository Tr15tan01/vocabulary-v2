import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      <Navbar
        expand="md"
        className="bg-body-tertiary mb-3"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">Vocabulary.ge</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            data-bs-theme="dark"
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                ნავიგაცია
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/">მთავარი</Nav.Link>
                <Nav.Link href="words">სიტყვები</Nav.Link>
                <Nav.Link href="app">აპლიკაცია</Nav.Link>
                <Nav.Link href="verbs">ზმნები</Nav.Link>
                <Nav.Link href="sound">ხმა</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;

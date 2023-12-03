import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid className="bg-dark text-light p-5">
      {/* <Row>
        <Col>
          <h3>tashi</h3>
        </Col>
      </Row> */}
      <footer className="py-3 my-4">
        <Row className="border-bottom">
          <Col className="text-center">
            <a href="#" className="nav-link link-secondary px-2">
              ქუქი პოლიტიკა
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              Features
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              Pricing
            </a>
          </Col>
          <Col className="text-center pb-5">
            <a href="#" className="nav-link link-secondary px-2">
              FAQs
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              About
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              About
            </a>
          </Col>
          <Col className="text-center">
            <a href="#" className="nav-link link-secondary px-2">
              FAQs
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              About
            </a>
            <a href="#" className="nav-link link-secondary px-2">
              About
            </a>
          </Col>
        </Row>
        <Row className="m-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Vocabulary.ge
          </p>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;

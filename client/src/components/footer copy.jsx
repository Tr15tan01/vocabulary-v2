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
        <Row>
          <Col>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link link-secondary px-2">
                  ქუქი პოლიტიკა
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-secondary px-2">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-secondary px-2">
                  Pricing
                </a>
              </li>
            </ul>
          </Col>
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link link-secondary px-2">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-secondary px-2">
                About
              </a>
            </li>
          </ul>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Vocabulary.ge
          </p>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;

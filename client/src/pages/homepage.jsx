import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function HomePage() {
  return (
    <Container fluid style={{}} className="p-5">
      <Row>
        <Col>
          <h1 className="h1">ვისწავლოთ ინგლისური სიტყვები</h1>
          <p>
            საიტზე VOCABULARY.GE შეგიძლიათ დაიწყოთ ინგლისური სიტყვების შესწავლა
            ონლაინ რეჟიმში, ამისათვის საჭიროა დააწვეთ ქვემოთ მოთავსებულ ღილაკს -
            "სწავლის დაწყება". გვერდის მეშვეობით თქვენ შეისწავლით 500 ძირითად
            ინგლისურ სიტყვას და გაზრდით თქვენს სიტყვათა მარაგს. გაუგებრობის
            შემთხვევაში შეგიძლიათ იხილოთ დეტალური ინსტრუქცია.
          </p>
          <hr />
          <Button variant="outline-success">
            <b>სწავლის დაწყება</b>
          </Button>{" "}
        </Col>
        <Col>
          <h1 className="h1">ვისწავლოთ ინგლისური სიტყვები</h1>
          <p>
            საიტზე VOCABULARY.GE შეგიძლიათ დაიწყოთ ინგლისური სიტყვების შესწავლა
            ონლაინ რეჟიმში, ამისათვის საჭიროა დააწვეთ ქვემოთ მოთავსებულ ღილაკს -
            "სწავლის დაწყება". გვერდის მეშვეობით თქვენ შეისწავლით 500 ძირითად
            ინგლისურ სიტყვას და გაზრდით თქვენს სიტყვათა მარაგს. გაუგებრობის
            შემთხვევაში შეგიძლიათ იხილოთ დეტალური ინსტრუქცია.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

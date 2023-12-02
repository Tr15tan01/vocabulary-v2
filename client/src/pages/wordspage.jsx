import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
function WordsPage() {
  return (
    <Container fluid style={{ minHeight: "90vh" }} className="p-5 page">
      <Row lg>
        <Col lg className="mb-5">
          <h1 className="h1 mb-5">500 ინგლისური სიტყვა</h1>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Button variant="outline-success" className="w-100 btn-lg">
            <b>სწავლის დაწყება</b>
          </Button>
        </Col>
        <Col lg>
          <p>
            ამ გვერდზე მოცემულია 500 ინგლისური სიტყვა, რომლის შესწავლაც კარგი
            დასაწყისია ენის შემსწავლელთათვის. ეს ინგლისური სიტყვები მოცემულია 50
            დონედ და ყოველ შემდეგ დონეზე გადასასვლელად საჭიროა მიმდინარე დონის
            წარმატებით გადალახვა. გვერდი სასარგებლოა არა მხოლოდ მათთვის, ვინც
            ახლა იწყებს ინგლისურის შესწავლას, არამედ კარგი სავარჯიშო და
            გასართობი იქნება მათთვის, ვინც უკვე ფლობს ამ ენას.
          </p>
          <hr />
          <Button variant="outline-success" className="w-100 btn-lg">
            <b>სწავლის დაწყება</b>
          </Button>
          <p>
            {" "}
            გვერდი VOCABULARY.GE გთავაზობთ ინტერაქტიულად შეისწავლოთ ინგლისური
            სიტყვები და გაზარდოთ თქვენი ინგლისური ლექსიკონი სახლიდან გაუსვლელად.
            ჯერჯერობით VOCABULARY.GE-ზე არის მხოლოდ 500 ინგლისური სიტყვა, მალე
            დაემატება კიდევ 500. სწავლის დასაწყებად საჭიროა დააწვეთ ქვემოთ
            მოცემულ ღილაკს და დაიწყოთ ყველაზე მნიშვნელოვანი 500 ინგლისური
            სიტყვის შესწავლა. წარმატებებს გისურვებთ!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WordsPage;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { verbs } from "../utils/data";
import { Link } from "react-router-dom";
function VerbsPage() {
  return (
    <Container fluid style={{ minHeight: "190vh" }} className="p-5 page">
      <Row lg>
        <Col lg className="mb-5">
          <h1 className="h2 mb-5">ინგლისური არაწესიერი ზმნების ჩამონათვალი</h1>
          <Link to="/verbs-test">
            <Button variant="primary" className="w-100 btn-md">
              <b>სწავლის დაწყება</b>
            </Button>
          </Link>
          <hr />

          <Table striped bordered hover size="md">
            <thead className="bg-dark ">
              <tr>
                <th>#</th>
                <th>First Form</th>
                <th>Second Form</th>
                <th>third Form</th>
                <th>Georgian</th>
              </tr>
            </thead>
            <tbody>
              {verbs.map((verb, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{verbs[idx].first}</td>
                    <td>{verbs[idx].second}</td>
                    <td>{verbs[idx].third}</td>
                    <td>{verbs[idx].geo}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <hr />
          <Button variant="primary" className="w-100 btn-md">
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
          <Button variant="primary" className="w-100 btn-md mb-3">
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

export default VerbsPage;

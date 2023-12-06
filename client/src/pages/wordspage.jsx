import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import data from "../utils/words.json";
import { PaginationComponent } from "../components";

function WordsPage() {
  console.log(data[0]);
  return (
    <Container fluid style={{ minHeight: "90vh" }} className="p-5 page">
      <Row lg>
        <Col lg className="mb-5">
          <h1 className="h1 mb-5">500 ინგლისური სიტყვა</h1>

          <Table bordered striped hover size="md" className="shadow-sm rounded">
            <thead className="rounded">
              <tr className="bg-purple rounded">
                <th className="bg-purple text-light">#</th>
                <th className="bg-purple text-light">ინგლისურად</th>
                <th className="bg-purple text-light">ქართულად</th>
              </tr>
            </thead>
            {/* put data in the table and iterate */}
            <tbody>
              {data.map((word, idx) => {
                if (idx < 10)
                  return (
                    <tr key={idx}>
                      <td>{word.ID}</td>
                      <td>{word.eng}</td>
                      <td>{word.geo}</td>
                    </tr>
                  );
              })}
            </tbody>
          </Table>
          <PaginationComponent />
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
          <Button variant="primary" className="w-100 btn-md shadow-sm mb-3">
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

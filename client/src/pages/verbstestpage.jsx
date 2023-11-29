import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { verbs } from "../utils/data";
import useSound from "use-sound";
import ping from "../assets/ping.mp3";

import toast, { Toaster } from "react-hot-toast";

function VerbsTestPage() {
  //sound
  const [playPing] = useSound(ping);

  const secondFormRef = useRef(null);
  const thirdFormRef = useRef(null);
  const wordRef = useRef(null);
  //toast
  const notify = () => toast.success("სწორია!!!");

  //functionality
  const [number, setNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);

  //fade in
  const [fade, setFade] = useState(false);
  const handleFadeIn = () => {
    setFade(true);
  };

  useEffect(() => {
    secondFormRef.current.focus();
  }, []);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.name === "second" && e.target.value === verbs[number].second) {
      thirdFormRef.current.focus();
      notify();
      playPing();
      setCorrectAnswer(correctAnswer + 1);
    } else if (
      e.target.name === "third" &&
      e.target.value === verbs[number].third
    ) {
      notify();
      playPing();
      setNumber(number + 1);
      secondFormRef.current.value = "";
      thirdFormRef.current.value = "";
      handleFadeIn();
      secondFormRef.current.focus();
    }
  };

  return (
    <Container style={{ minHeight: "90vh" }} className="mt-3">
      <Row>
        <Col className="col-md">
          <Card
            style={{
              // width: "70%",
              minHeight: "330px",
              margin: "auto",
              backgroundColor: "whitesmoke",
            }}
            className="shadow-lg mb-3"
          >
            <Card.Header
              className="bg-primary text-light p-1"
              // style={{ height: "120px" }}
            >
              <Row className="text-center m-0 p-0">
                <Col className="text-light p-1">
                  <p className="h4">
                    სწორი პასუხი:
                    <Badge bg="success" className="p-2 m-1">
                      {" "}
                      {correctAnswer}
                    </Badge>
                  </p>
                </Col>
                <Col className="text-light p-1">
                  <p className="h4">
                    არასწორი პასუხი:{" "}
                    <Badge bg="danger">{incorrectAnswer}</Badge>
                  </p>
                </Col>
                <Col className="text-light  p-1">
                  <h3>
                    <Badge bg="danger">3/120</Badge>
                  </h3>{" "}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title
                className={fade ? "display-5 fade-in" : "display-5"}
                ref={wordRef}
              >
                {verbs[number].first}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                ჩაწერეთ შესაბამისი სიტყვა და დააწექით Enter ღილაკს, ან დააწექით
                ღილაკს შემოწმება
              </Card.Text>
              <Form className="mb-3">
                <Row>
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Col className="col-md">
                    <Form.Control
                      size="lg"
                      type="text"
                      name="second"
                      placeholder="შესაბამისი სიტყვა"
                      ref={secondFormRef}
                      autoComplete="off"
                      onChange={onChangeHandler}
                      onFocus={() => console.log("second focused")}
                    />
                  </Col>
                  <Col className="col-md">
                    <Form.Control
                      size="lg"
                      type="text"
                      name="third"
                      placeholder="შესაბამისი სიტყვა"
                      ref={thirdFormRef}
                      autoComplete="off"
                      onChange={onChangeHandler}
                    />
                  </Col>
                </Row>
              </Form>
              <Row className="g-2">
                <Button variant="success" className="p-3" onClick={notify}>
                  <b>შეამოწმე</b>
                </Button>
                <Button
                  variant="warning"
                  className="p-3"
                  onClick={handleFadeIn}
                >
                  <b>გამოტოვება</b>
                </Button>
                <Button
                  variant="danger"
                  className="p-3"
                  onClick={() => setFade(false)}
                >
                  <b>ტესტის შეჩერება</b>
                </Button>
              </Row>
            </Card.Body>
            <Card.Footer className="bg-primary text-light text-center">
              2 days ago
            </Card.Footer>
          </Card>
          <Toaster />
        </Col>
      </Row>
    </Container>
  );
}

export default VerbsTestPage;

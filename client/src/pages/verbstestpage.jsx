import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

  //fade in
  const [fade, setFade] = useState(false);
  const handleFadeIn = () => {
    setFade(!fade);
  };

  useEffect(() => {
    secondFormRef.current.focus();
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.name === "second" && e.target.value === verbs[number].second) {
      notify();
      thirdFormRef.current.focus();
      playPing();
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
              <Row className="text-center">
                <div className="text-light">სწორი პასუხი: 3</div>
                <div className="text-light">არა სწორი პასუხი: 3</div>
                <div className="text-light">
                  <h3>3/120</h3>{" "}
                </div>
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
                <Button variant="danger" className="p-3">
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

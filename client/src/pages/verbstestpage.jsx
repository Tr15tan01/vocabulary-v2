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
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "../components/modal";

import toast, { Toaster } from "react-hot-toast";

function VerbsTestPage() {
  //sound
  const [playPing] = useSound(ping);

  const secondFormRef = useRef(null);
  const thirdFormRef = useRef(null);
  const wordRef = useRef(null);
  //toast
  const notify = () => toast.success("სწორია!!!");
  // const alertify = () => toast.error("არასწორი პასუხი");

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/verbs");
    handleClose();
  };

  const [test, setTest] = useState(false);

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
    // console.log(e.target.value);
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
      setCorrectAnswer(correctAnswer + 1);
      clearFields();
      handleFadeIn();
      secondFormRef.current.focus();
    }
  };

  //check answers
  const checkAnswers = () => {
    if (
      secondFormRef.current.value !== verbs[number].second ||
      thirdFormRef.current.value !== verbs[number].third
    ) {
      setIncorrectAnswer(incorrectAnswer + 1);
      secondFormRef.current.value = verbs[number].second;
      thirdFormRef.current.value = verbs[number].third;
      // alertify();
    }
  };

  //ommit word
  const ommitWord = () => {
    setNumber(number + 1);
    clearFields();
    secondFormRef.current.focus();
  };

  //clear all fielsds
  const clearFields = () => {
    secondFormRef.current.value = "";
    thirdFormRef.current.value = "";
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

                <Col className="text-light  p-1">
                  <h3>
                    <Badge bg="danger">
                      {number + 1}/{verbs.length}
                    </Badge>
                  </h3>{" "}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Title
                className={fade ? "display-5 fade-in" : "display-5"}
                ref={wordRef}
              >
                {verbs[number].first} -{" "}
                <span className="display-6">{verbs[number].geo}</span>
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
                      size="md"
                      type="text"
                      name="second"
                      placeholder="შესაბამისი სიტყვა"
                      ref={secondFormRef}
                      autoComplete="off"
                      onChange={onChangeHandler}
                      className="is-valid"
                    />
                  </Col>
                  <Col className="col-md">
                    <Form.Control
                      size="md"
                      type="text"
                      name="third"
                      placeholder="შესაბამისი სიტყვა"
                      ref={thirdFormRef}
                      autoComplete="off"
                      onChange={onChangeHandler}
                      className="is-invalid"
                    />
                  </Col>
                </Row>
              </Form>
              <div className="g-2">
                <Button
                  variant="success"
                  className="px-5 m-1"
                  onClick={checkAnswers}
                >
                  <b>შეამოწმე</b>
                </Button>
                <Button
                  variant="warning"
                  className="px-3  m-1"
                  onClick={ommitWord}
                >
                  <b>გამოტოვება</b>
                </Button>
                <Button
                  variant="danger"
                  className="px-3 m-1"
                  onClick={handleShow}
                >
                  <b>ტესტის შეჩერება</b>
                </Button>
              </div>
              <ConfirmationModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                handleNavigate={handleNavigate}
                confirmationText="ტესტის შეჩერება"
                rejectionText="ტესტზე დაბრუნება"
              />
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

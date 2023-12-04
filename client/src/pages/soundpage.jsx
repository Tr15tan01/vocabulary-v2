import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SoundPage() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn support speech recognition.</span>;
  }

  return (
    <Container fluid style={{ minHeight: "90vh" }} className="p-5">
      <Row>
        <Col>
          {/* <h3>Application Start</h3> */}
          <Card
            style={{
              width: "70%",
              height: "330px",
              margin: "auto",
              backgroundColor: "whitesmoke",
            }}
            className="shadow-lg mb-3"
          >
            <Card.Header className="bg-dark">Featured</Card.Header>
            <Card.Body className="text-center">
              <Card.Title className="display-5">ხმის გვერდი</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                ჩაწერეთ შესაბამისი სიტყვა და დააწექით Enter ღილაკს, ან დააწექით
                ღილაკს შემოწმება
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link> */}
              {/* <Card.Link href="#">Another Link</Card.Link> */}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="შესაბამისი სიტყვა"
                    autoComplete="off"
                  />
                </Form.Group>
              </Form>
              <Button variant="success">
                <b>ხმის ჩართვა</b>
              </Button>
              <Button variant="warning" className="m-1">
                <b>გამოტოვება</b>
              </Button>
              <Button variant="danger">
                <b>ტესტის შეჩერება</b>
              </Button>
            </Card.Body>
            <Card.Footer className="bg-success text-light text-center">
              2 days ago
            </Card.Footer>
          </Card>
          {/* <Button variant="outline-success" className="w-100 btn-lg">
            <b>სწავლის დაწყება</b>
          </Button> */}
        </Col>
        <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>
      </Row>
    </Container>
  );
}

export default SoundPage;

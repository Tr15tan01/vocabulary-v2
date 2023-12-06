import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import regeneratorRuntime from "regenerator-runtime";
import toast, { Toaster } from "react-hot-toast";
import ping from "../assets/ping.mp3";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";
import useSound from "use-sound";

function SoundPage() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const notify = () => toast.success("სწორია!!!");
  const [playPing] = useSound(ping);

  const checkSound = () => {
    if (transcript === "Hello, what is your name?") {
      notify();
      playPing();
    }
  };

  useEffect(() => {
    console.log(transcript);
    checkSound();
  });

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
              <Card.Title className="display-6">
                გამარჯობა, რა გქვია?
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                დააწექით ჩართვის ღილაკს და წარმოთქვით შესაბამისი ფრაზა
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link> */}
              {/* <Card.Link href="#">Another Link</Card.Link> */}

              <p>Microphone: {listening ? "on" : "off"}</p>
              <Button
                variant="success"
                onClick={SpeechRecognition.startListening}
              >
                <b>ხმის ჩართვა</b>
              </Button>
              <Button
                variant="warning"
                className="m-1"
                onClick={SpeechRecognition.stopListening}
              >
                <b>ხმის გამორთვა</b>
              </Button>
              <Button variant="danger" onClick={resetTranscript}>
                <b>წაშლაა</b>
              </Button>
              <div style={{ minHeight: "45px" }}>
                <p>{transcript}</p>
              </div>
            </Card.Body>
            <Card.Footer className="bg-success text-light text-center">
              2 days ago
            </Card.Footer>
          </Card>
          {/* <Button variant="outline-success" className="w-100 btn-lg">
            <b>სწავლის დაწყება</b>
          <>/Button> */}
        </Col>
        {/* <div>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div> */}
      </Row>
      <Toaster />
    </Container>
  );
}

export default SoundPage;

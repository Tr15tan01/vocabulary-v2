// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//componrnts
import NavBar from "./components/navbar";
import { HomePage } from "./pages";

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <NavBar />
      <HomePage />
    </Container>
  );
}

export default App;

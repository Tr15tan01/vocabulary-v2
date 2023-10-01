// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

//componrnts
import NavBar from "./components/navbar";
import { AppPage, HomePage, WordsPage } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/words" element={<WordsPage />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;

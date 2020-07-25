import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Container className="text-center">
      <BrowserRouter>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;

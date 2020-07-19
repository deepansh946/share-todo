import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Container>
  );
}

export default App;

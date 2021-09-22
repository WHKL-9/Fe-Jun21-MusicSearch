import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

export default function Home({
  location,
  history,
  match,
}: RouteComponentProps) {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Check out the latest hits! </h1>
          <p>🎷 | 🎸 | 🎹 | 🎺 | 🎻 | 🥁 </p>
        </Container>
      </Jumbotron>
    </>
  );
}

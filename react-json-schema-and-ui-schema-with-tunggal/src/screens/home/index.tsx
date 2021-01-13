import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "tunggal";

const Home = () => {
  return (
    <>
      <Container>
        <Row gutter={12}>
          <Col sm={12} style={{ marginTop: "50px", textAlign: "center" }}>
            <h2>React JSON Schema &amp; UI Schema with Tunggal</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

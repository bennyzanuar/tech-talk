import React from "react";
import { Container, Row, Col } from "tunggal";
import Editor from "@monaco-editor/react";

const toJson = (val: any) => JSON.stringify(val, null, 2);

const Comp = ({ schema, uiSchema, children }: any) => {
  const options = {
    minimap: {
      enabled: false,
    },
    fontSize: "12px",
  };

  return (
    <Container>
      <Row gutter={12}>
        <Col md={4}>
          <Row gutter={12}>
            <h2>JSON schema</h2>
            <Editor height="50vh" language="json" theme="vs-dark" options={options} value={toJson(schema)} />
          </Row>
          <Row gutter={12}>
            <h2>UI schema</h2>
            <Editor height="50vh" language="json" theme="vs-dark" options={options} value={toJson(uiSchema)} />
          </Row>
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </Container>
  );
};

export default Comp;

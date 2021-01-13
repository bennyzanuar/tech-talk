import React from "react";
import { ObjectFieldTemplateProps } from "@rjsf/core";
import { Container, Row, Col } from "tunggal";

const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => {
  return (
    <Container>
      <Row gutter={24}>
        <Col sm={12}>{properties[0].content}</Col>
        <Col sm={12}>{properties[1].content}</Col>
        <Col sm={12}>{properties[2].content}</Col>
        <Col sm={12}>{properties[3].content}</Col>
        <Col sm={12}>{properties[4].content}</Col>
      </Row>
    </Container>
  );
};

export default ObjectFieldTemplate;

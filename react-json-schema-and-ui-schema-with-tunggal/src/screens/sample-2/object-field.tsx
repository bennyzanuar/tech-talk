import React from "react";
import { ObjectFieldTemplateProps } from "@rjsf/core";
import { Container, Row, Col } from "tunggal";

const ObjectFieldTemplate = ({ properties }: ObjectFieldTemplateProps) => {
  console.log("propertiespropertiesproperties ", properties);

  return (
    <Container>
      <Row gutter={24}>
        <Col sm={4}>{properties[0].content}</Col>
        <Col sm={4}>{properties[1].content}</Col>
        <Col sm={4}>{properties[2].content}</Col>
      </Row>
      <Row>
        <Col sm={12}>{properties[3].content}</Col>
        <Col sm={12}>{properties[4].content}</Col>
        <Col sm={12}>{properties[5].content}</Col>
        <Col sm={12}>{properties[6].content}</Col>
        <Col sm={12}>{properties[7].content}</Col>
        <Col sm={12}>{properties[8].content}</Col>
        <Col sm={12}>{properties[9].content}</Col>
        <Col sm={12}>{properties[10].content}</Col>
        <Col sm={12}>{properties[11].content}</Col>
        <Col sm={12}>{properties[12].content}</Col>
        <Col sm={12}>{properties[13].content}</Col>
        {/* <Col sm={12}>{properties[14].content}</Col> */}
      </Row>
    </Container>
  );
};

export default ObjectFieldTemplate;

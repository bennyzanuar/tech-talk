import React, { useState } from "react";
import { JSONSchema7 } from "json-schema";
import { Form as FormTheme } from "theme";
import Playground from "components/playground";
import simpleSchema from "schemas/sample-1/schema.json";
import simpleUISchema from "schemas/sample-1/ui-schema.json";
import { IChangeEvent, ISubmitEvent } from "@rjsf/core";
import { Row, Col } from "tunggal";
import { ControlledEditor } from "@monaco-editor/react";
import { customFormats, customValidations, customErrors } from "utils";
import { IFormData } from "screens/sample-1/types";
const toJson = (val: any) => JSON.stringify(val, null, 2);

const Comp = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    age: null,
    bio: "",
    password: "",
  });
  const [schema] = useState<any>(simpleSchema);

  const handleEditorChange = (ev: any, value: any) => {
    setFormData(JSON.parse(value));
  };

  const options = {
    minimap: {
      enabled: false,
    },
    fontSize: "14px",
  };

  return (
    <>
      <Playground schema={simpleSchema} uiSchema={simpleUISchema}>
        <Row gutter={12}>
          <Col md={6} style={{ marginTop: "30px" }}>
            <FormTheme
              formData={formData}
              schema={schema as JSONSchema7}
              uiSchema={simpleUISchema}
              // liveValidate
              noHtml5Validate
              showErrorList={false}
              customFormats={customFormats}
              transformErrors={customErrors}
              validate={customValidations}
              onChange={(e: IChangeEvent<any>) => {
                setFormData(e.formData);
              }}
              onSubmit={(e: ISubmitEvent<any>) => {
                console.log("submit ", e.formData);
              }}
              onError={(e: any) => {
                console.log("errror dong ", e);
              }}
            />
          </Col>
          <Col md={6}>
            <h2>Form data</h2>
            <ControlledEditor
              height="100vh"
              language="json"
              theme="vs-dark"
              options={options}
              value={toJson(formData)}
              onChange={handleEditorChange}
            />
          </Col>
        </Row>
      </Playground>
    </>
  );
};

export default Comp;

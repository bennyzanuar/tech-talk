import React, { useState } from "react";
import { JSONSchema7 } from "json-schema";
import { Form as FormTheme } from "theme";
import Playground from "components/playground";
import sampleSchema from "schemas/sample-3/schema.json";
import sampleUISchema from "schemas/sample-3/ui-schema.json";
import { IChangeEvent, ISubmitEvent } from "@rjsf/core";
import { Row, Col, Button, Container } from "tunggal";
import { ControlledEditor } from "@monaco-editor/react";
import { customFormats, customValidations, customErrors } from "utils";
import { IFormData } from "screens/sample-3/types";
import ObjectFieldTemplate from "screens/sample-3/object-field";

const toJson = (val: any) => JSON.stringify(val, null, 2);

const Comp = () => {
  const [formData, setFormData] = useState<IFormData>({
    grantType: "WEB",
    deviceId: "WKWKWK-1111-2222-3333",
    deviceLogin: "WKWWKDEVICE",
  });
  const [schema] = useState<any>(sampleSchema);

  const handleEditorChange = (ev: any, value: any) => {
    setFormData(JSON.parse(value));
  };

  const handleSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleResetForm = () => {
    const { email, password, ...data } = formData;
    setFormData(data);
  };

  const options = {
    minimap: {
      enabled: false,
    },
    fontSize: "14px",
  };

  return (
    <>
      <Playground schema={sampleSchema} uiSchema={sampleUISchema}>
        <Row gutter={12}>
          <Col md={6} style={{ marginTop: "30px" }}>
            <FormTheme
              formData={formData}
              schema={schema as JSONSchema7}
              uiSchema={sampleUISchema}
              noHtml5Validate
              showErrorList={false}
              customFormats={customFormats}
              transformErrors={customErrors}
              validate={customValidations}
              ObjectFieldTemplate={ObjectFieldTemplate}
              onChange={(e: IChangeEvent<any>) => {
                setFormData(e.formData);
              }}
              onSubmit={(e: ISubmitEvent<any>) => handleSubmit(e.formData)}
              onError={(e: any) => {
                console.log("errror dong ", e);
              }}
            >
              <Container>
                <Row gutter={24} style={{ padding: "0 0 0 16px" }}>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                  &nbsp;
                  <Button color="danger" type="button" onClick={() => handleResetForm()}>
                    Reset
                  </Button>
                </Row>
              </Container>
            </FormTheme>
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

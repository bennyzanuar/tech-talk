import React, { useRef, useEffect, useState } from "react";
import { JSONSchema7 } from "json-schema";
import { Form as FormTheme } from "theme";
import Playground from "components/playground";
import simpleSchema from "schemas/sample-2/schema.json";
import simpleUISchema from "schemas/sample-2/ui-schema.json";
import { IChangeEvent, ISubmitEvent } from "@rjsf/core";
import { Row, Col } from "tunggal";
import { ControlledEditor } from "@monaco-editor/react";

import { customFormats, customValidations, customErrors, customSchemaOptions, fetchRequest } from "utils";
import { IFormData } from "screens/sample-2/types";
import ObjectFieldTemplate from "screens/sample-2/object-field";
const toJson = (val: any) => JSON.stringify(val, null, 2);

const Comp = () => {
  const [formData, setFormData] = useState<IFormData>({
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    firstName: "",
    lastName: "",
    age: null,
    bio: "",
    password: "",
    telephone: "",
    jenisKelamin: "",
    jenisUsaha: "",
  });
  const [schema, setSchema] = useState<any>(simpleSchema);

  useEffect(() => {
    getProvinsi();
  }, []);

  useEffect(() => {
    if (formData.provinsi) {
      setFormData({ ...formData, kota: "", kecamatan: "", kelurahan: "" });
      getKota();
    }
  }, [formData.provinsi]);

  useEffect(() => {
    if (formData.provinsi) {
      setFormData({ ...formData, kecamatan: "", kelurahan: "" });
      getKecamatan();
    }
  }, [formData.kota]);

  useEffect(() => {
    if (formData.provinsi) {
      setFormData({ ...formData, kelurahan: "" });
      getKelurahan();
    }
  }, [formData.kecamatan]);

  const getProvinsi = async () => {
    const response = await fetchRequest("provinsi");
    const newSchema = customSchemaOptions(schema, response.provinsi, "Provinsi");
    setSchema(newSchema);
  };

  const getKota = async () => {
    const response = await fetchRequest(`kota?id_provinsi=${formData.provinsi}`);
    console.log("response.kota_kabupaten ", response.kota_kabupaten);
    if (response.kota_kabupaten.length) {
      const newSchema = customSchemaOptions(schema, response.kota_kabupaten, "Kota");
      setSchema(newSchema);
    }
  };

  const getKecamatan = async () => {
    const response = await fetchRequest(`kecamatan?id_kota=${formData.kota}`);
    if (response.kecamatan.length) {
      const newSchema = customSchemaOptions(schema, response.kecamatan, "Kecamatan");
      setSchema(newSchema);
    }
  };

  const getKelurahan = async () => {
    const response = await fetchRequest(`kelurahan?id_kecamatan=${formData.kecamatan}`);
    if (response.kelurahan.length) {
      const newSchema = customSchemaOptions(schema, response.kelurahan, "Kelurahan");
      setSchema(newSchema);
    }
  };

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
              liveValidate
              noHtml5Validate
              showErrorList={false}
              customFormats={customFormats}
              transformErrors={customErrors}
              validate={customValidations}
              ObjectFieldTemplate={ObjectFieldTemplate}
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

import React from "react";

import { FieldTemplateProps } from "@rjsf/core";
import { Form } from "tunggal";

const FieldTemplate = ({
  id,
  label,
  children,
  displayLabel,
  rawErrors = [],
  hidden,
  rawHelp,
  rawDescription,
  required,
}: FieldTemplateProps) => {
  const invalidText = () => {
    return Array.from(new Set(rawErrors))
      .map((err: any) => err)
      .join(", ");
  };

  const invalid = (): boolean => {
    return rawErrors.length ? true : false;
  };

  return (
    <Form.Item label={displayLabel && !hidden && label} invalid={invalid()} required={required} invalidText={invalidText()}>
      {children}
    </Form.Item>
  );
};

export default FieldTemplate;

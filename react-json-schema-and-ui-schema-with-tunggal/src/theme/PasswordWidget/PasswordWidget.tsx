import React from "react";
import { Form, Input } from "tunggal";
import { WidgetProps } from "@rjsf/core";

export interface TextWidgetProps extends WidgetProps {
  type?: string;
}

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  placeholder,
  rawErrors = [],
}: TextWidgetProps) => {
  const _onChange = (value: any) => onChange(value === "" ? options.emptyValue : value);
  const _onBlur = (value: any) => onBlur(id, value);

  return (
    <Input
      required={required}
      disabled={disabled}
      readOnly={readonly}
      type="password"
      placeholder={placeholder}
      value={value || value === 0 ? value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
    />
  );
};

export default TextWidget;

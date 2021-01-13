import React from "react";
import { Select } from "tunggal";
import { WidgetProps, utils } from "@rjsf/core";

const { asNumber, guessType } = utils;

const nums = new Set(["number", "integer"]);

const processValue = (schema: any, value: any) => {
  const { type, items } = schema;
  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === "boolean") {
    return value;
    // return value === "true";
  } else if (type === "number") {
    return asNumber(value);
  }

  if (schema.enum) {
    if (schema.enum.every((x: any) => guessType(x) === "number")) {
      return asNumber(value);
    } else if (schema.enum.every((x: any) => guessType(x) === "boolean")) {
      return value === "true";
    }
  }

  return value;
};

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  rawErrors = [],
}: WidgetProps) => {
  const { enumOptions } = options;

  const _onChange = (val: any) => onChange(processValue(schema, val).value);
  const _onBlur = (val: any) => onBlur(id, processValue(schema, val).value);

  const selectedValue = (enumOptions as any).find((d: any) => d.value === value) || null;

  return (
    <Select
      value={selectedValue}
      required={required}
      disabled={disabled}
      width="100%"
      options={enumOptions as any}
      placeholder={placeholder}
      onChange={_onChange}
      onBlur={_onBlur}
    />
  );
};

export default SelectWidget;

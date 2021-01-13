import React from "react";
import { customWidgets } from "utils";
import FieldTemplate from "../FieldTemplate";
import Widgets from "../Widgets";
import SubmitButton from "../SubmitButton";
import { ThemeProps } from "@rjsf/core";
import { utils } from "@rjsf/core";
// import ArrayFieldTemplate from '../ArrayFieldTemplate';
// import ErrorList from '../ErrorList';
// import Fields from '../Fields';
// import ObjectFieldTemplate from '../ObjectFieldTemplate';

const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

const Theme: ThemeProps = {
  // ArrayFieldTemplate,
  // fields: { ...fields, ...Fields },
  // ObjectFieldTemplate,
  // ErrorList,
  children: <SubmitButton />,
  fields: { ...fields },
  FieldTemplate,
  widgets: { ...widgets, ...Widgets, ...customWidgets },
};

export default Theme;

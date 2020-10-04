import React from "react";
import CheckBox from "./CheckBox";
import DatePkr from "./DatePkr";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

function FormikControls(props) {
  const { control, ...rest } = props || "";

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePkr {...rest} />;
    default:
      return null;
  }
}

export default FormikControls;

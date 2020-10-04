import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TextError from "./TextError";

function DatePkr(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(date) => setFieldValue(name, date)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePkr;

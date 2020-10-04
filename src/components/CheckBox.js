import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

function CheckBox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field {...{ name }}>
        {({ field }) =>
          options.map(({ value, text }) => (
            <React.Fragment key={value}>
              <input
                type="checkbox"
                id={value}
                {...field}
                {...rest}
                value={value}
                checked={
                  typeof field.value === "undefined"
                    ? false
                    : field.value.includes(value)
                }
              />
              <label htmlFor={value}>{text}</label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage {...{ name }} component={TextError} />
    </div>
  );
}

export default CheckBox;

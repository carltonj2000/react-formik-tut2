import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

function Radio(props) {
  const { label, name: nm, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={nm}>
        {({ field }) =>
          options.map(({ value, name }) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={value}
                {...field}
                {...rest}
                value={value}
                checked={field.value === value}
              />
              <label htmlFor={value}>{name}</label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={nm} component={TextError} />
    </div>
  );
}

export default Radio;

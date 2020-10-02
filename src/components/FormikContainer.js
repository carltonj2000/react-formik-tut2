import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function FormikContainer() {
  const options = [
    { value: "", option: "Select an option" },
    { value: "option1", option: "Option 1" },
    { value: "option2", option: "Option 2" },
    { value: "option3", option: "Option 3" },
  ];

  const initialValues = { email: "", description: "", selectOption: "" };

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    description: Yup.string().required(),
    option: Yup.string().required(),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      {(formik) => (
        <Form>
          <FormikControls
            control="input"
            type="email"
            name="email"
            label="Email"
          />
          <FormikControls
            control="textarea"
            name="description"
            label="Description"
          />
          <FormikControls
            control="select"
            name="option"
            label="Select An Option"
            options={options}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;

import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
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
            control="input"
            type="password"
            name="password"
            label="Password"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;

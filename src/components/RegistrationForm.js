import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function RegistrationFrom() {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
    contactMode: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password does not match.")
      .required(),
    contactMode: Yup.string()
      .required()
      .oneOf(["emailContact", "telephoneContact"]),
    phone: Yup.string().when("contactMode", {
      is: "telephoneContact",
      then: Yup.string().required(),
    }),
  });

  const contactModeOptions = [
    { value: "emailContact", text: "Email" },
    { value: "telephoneContact", text: "Telephone" },
  ];

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
          <FormikControls
            control="input"
            type="password"
            name="passwordConfirmation"
            label="Confirm Password"
          />
          <FormikControls
            control="radio"
            name="contactMode"
            label="Mode of contact"
            options={contactModeOptions}
          />
          <FormikControls
            control="input"
            type="phone"
            name="phone"
            label="Phone"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationFrom;

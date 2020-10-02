import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function FormikContainer() {
  const selectOptions = [
    { value: "", option: "Select an option" },
    { value: "option1", option: "Option 1" },
    { value: "option2", option: "Option 2" },
    { value: "option3", option: "Option 3" },
  ];

  const radioOptions = [
    { value: "rOption1", name: "Radio Option 1" },
    { value: "rOption2", name: "Radio Option 2" },
    { value: "rOption3", name: "Radio Option 3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    description: Yup.string().required(),
    selectOption: Yup.string().required(),
    radioOption: Yup.string().required(),
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
            name="selectOption"
            label="Select An Option"
            options={selectOptions}
          />
          <FormikControls
            control="radio"
            name="radioOption"
            label="Radio Topic"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;

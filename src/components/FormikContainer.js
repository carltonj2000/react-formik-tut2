import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function FormikContainer() {
  const selectOptions = [
    { value: "", text: "Select an option" },
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" },
  ];

  const radioOptions = [
    { value: "rOption1", text: "Radio 1" },
    { value: "rOption2", text: "Radio 2" },
    { value: "rOption3", text: "Radio 3" },
  ];

  const checkBoxOptions = [
    { value: "cbOption1", text: "Checkbox 1" },
    { value: "cbOption2", text: "Checkbox 2" },
    { value: "cbOption3", text: "Checkbox 3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOptions: [],
    date: new Date(),
  };

  const validationSchema = Yup.object({
    email: Yup.string().required(),
    description: Yup.string().required(),
    selectOption: Yup.string().required(),
    radioOption: Yup.string().required(),
    checkBoxOptions: Yup.array().required(),
    date: Yup.date().required(),
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
          <FormikControls
            control="checkbox"
            name="checkBoxOptions"
            label="Check Box Group Name"
            options={checkBoxOptions}
          />
          <FormikControls control="date" name="date" label="Select Date" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;

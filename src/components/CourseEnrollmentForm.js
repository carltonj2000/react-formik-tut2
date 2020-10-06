import React from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

function CourseEnrollmentForm() {
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    startDate: null,
  };

  const courseOptions = [
    { value: "", text: "Select a course" },
    { value: "english", text: "English" },
    { value: "french", text: "French" },
    { value: "spanish", text: "Spanish" },
  ];

  const skillOptions = [
    { value: "html", text: "HTML" },
    { value: "css", text: "CSS" },
    { value: "javascript", text: "JavaScript" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    bio: Yup.string().required(),
    course: Yup.string().required(),
    startDate: Yup.date().required().nullable(),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      {(formik) => (
        <Form>
          <FormikControls control="inputChakra" name="email" label="Email" />
          <FormikControls control="textarea" name="bio" label="Bio" />
          <FormikControls
            control="select"
            name="course"
            label="Course"
            options={courseOptions}
          />
          <FormikControls
            control="checkbox"
            name="skills"
            label="Skills"
            options={skillOptions}
          />
          <FormikControls control="date" name="startDate" label="Course Date" />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CourseEnrollmentForm;

import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", channel: "" };

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required(),
  channel: Yup.string().required("required"),
});
const onSubmit = (values) => {
  console.log(values);
};
const YoutubeForm = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <div className="error">{errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.channel}
          />
          {errors.channel && touched.channel ? (
            <div className="error">{errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

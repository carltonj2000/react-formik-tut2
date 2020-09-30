import React from "react";

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required(),
  channel: Yup.string().required("required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const YoutubeForm = () => {
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {({ field, form, meta }) => {
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="address" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;

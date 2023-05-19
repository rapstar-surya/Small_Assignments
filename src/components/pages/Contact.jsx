import React from "react";
import contact from "../css/Contact.module.css";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .min(10, "Phone Number must be at least 10 characters")
      .max(15, "Phone Number can be maximum 15 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const userData = JSON.stringify(values);
    localStorage.setItem('userData', userData);
    resetForm();
  };
  

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={contact.form}>
          <h1>Contact Form</h1>
          <div>
            <label htmlFor="firstName">First Name</label> <br />
            <Field
              className={contact.field}
              type="text"
              id="firstName"
              name="firstName"
            />{" "}
            <br />
            {errors.firstName && touched.firstName && (
              <div className={contact.errors}>{errors.firstName}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label> <br />
            <Field
              className={contact.field}
              type="text"
              id="lastName"
              name="lastName"
            />{" "}
            <br />
            {errors.lastName && touched.lastName && (
              <div className={contact.errors}>{errors.lastName}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label> <br />
            <Field
              className={contact.field}
              type="email"
              id="email"
              name="email"
            />{" "}
            <br />
            {errors.email && touched.email && (
              <div className={contact.errors}>{errors.email}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label> <br />
            <Field
              className={contact.field}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
            />{" "}
            <br />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className={contact.errors}>{errors.phoneNumber}</div>
            )}{" "}
            <br />
          </div>

          <button className={contact.submitBtn} type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

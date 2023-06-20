import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import userForm from "../css/userForm.module.css";
import { useParams } from "react-router-dom";

export default function EditUser({ match }) {
    const { index } = useParams();

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
    const userData = localStorage.getItem("userData");
    let users = [];

    if (userData) {
      users = JSON.parse(userData);
    }

    users[index] = values;

    localStorage.setItem("userData", JSON.stringify(users));
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
        <Form className={userForm.form}>
          <h1>Edit User</h1>
          <div>
            <label htmlFor="firstName">First Name</label> <br />
            <Field
              className={userForm.field}
              type="text"
              id="firstName"
              name="firstName"
            />{" "}
            <br />
            {errors.firstName && touched.firstName && (
              <div className={userForm.errors}>{errors.firstName}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label> <br />
            <Field
              className={userForm.field}
              type="text"
              id="lastName"
              name="lastName"
            />{" "}
            <br />
            {errors.lastName && touched.lastName && (
              <div className={userForm.errors}>{errors.lastName}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label> <br />
            <Field
              className={userForm.field}
              type="email"
              id="email"
              name="email"
            />{" "}
            <br />
            {errors.email && touched.email && (
              <div className={userForm.errors}>{errors.email}</div>
            )}{" "}
            <br />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label> <br />
            <Field
              className={userForm.field}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
            />{" "}
            <br />
            {errors.phoneNumber && touched.phoneNumber && (
              <div className={userForm.errors}>{errors.phoneNumber}</div>
            )}{" "}
            <br />
          </div>

          <button className={userForm.submitBtn} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

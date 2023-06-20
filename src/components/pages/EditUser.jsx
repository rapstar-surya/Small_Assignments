import React, { useEffect, useState } from "react";
import userForm from "../css/userForm.module.css";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUsers(JSON.parse(storedUserData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[id] = {
        ...updatedUsers[id],
        [name]: value,
      };
      return updatedUsers;
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstNameRegex = /^[^\s]+$/; // Matches any non-empty string
    const lastNameRegex = /^[^\s]+$/; // Matches any non-empty string
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    const phoneNumberRegex = /^[0-9]{10,15}$/; // Matches 10 to 15 digits - number datatypes

    let validationErrors = {};

    if (!firstNameRegex.test(users[id]?.firstName || "")) {
      validationErrors.firstName = "First Name cannot be blank";
    }

    if (!lastNameRegex.test(users[id]?.lastName || "")) {
      validationErrors.lastName = "Last Name cannot be blank";
    }

    if (!emailRegex.test(users[id]?.email || "")) {
      validationErrors.email = "Invalid email format";
    }

    if (!phoneNumberRegex.test(users[id]?.phoneNumber || "")) {
      validationErrors.phoneNumber =
        "Phone Number must be between 10 to 15 digits, no alphabets allowed ";
    }

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("userData", JSON.stringify(users));
      navigate("/"); // Redirecting to the home page
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form className={userForm.form} onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <div>
          <label htmlFor="firstName">First Name</label> <br />
          <input
            className={userForm.field}
            type="text"
            name="firstName"
            value={users[id]?.firstName || ""}
            onChange={handleInputChange}
          />{" "}
          <br />
          {errors.firstName && (
            <div className={userForm.errors}>{errors.firstName}</div>
          )}
          <br />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label> <br />
          <input
            className={userForm.field}
            type="text"
            name="lastName"
            value={users[id]?.lastName || ""}
            onChange={handleInputChange}
          />{" "}
          <br />
          {errors.lastName && (
            <div className={userForm.errors}>{errors.lastName}</div>
          )}
          <br />
        </div>

        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            className={userForm.field}
            type="email"
            name="email"
            value={users[id]?.email || ""}
            onChange={handleInputChange}
          />{" "}
          <br />
          {errors.email && (
            <div className={userForm.errors}>{errors.email}</div>
          )}
          <br />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label> <br />
          <input
            className={userForm.field}
            type="text"
            name="phoneNumber"
            value={users[id]?.phoneNumber || ""}
            onChange={handleInputChange}
          />{" "}
          <br />
          {errors.phoneNumber && (
            <div className={userForm.errors}>{errors.phoneNumber}</div>
          )}
          <br />
        </div>

        <button className={userForm.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

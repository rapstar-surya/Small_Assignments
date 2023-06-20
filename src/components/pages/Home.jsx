import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "../css/Home.module.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUsers(JSON.parse(userData));
    }
  }, []);

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <div className={home.nav}>
        <h1>User Management Application</h1>
      </div>
      <div className={home.tableContainer}>
        <table className={home.table}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.firstName}&nbsp;{user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <Link to={`/edit/${index}`} className={home.editBtn}>
                    Edit
                  </Link>

                  <button
                    className={home.delBtn}
                    onClick={() => handleDeleteUser(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

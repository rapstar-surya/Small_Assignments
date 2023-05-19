import React, { useState } from "react";
import home from "../css/Home.module.css";
import { getUsers } from "../utils/localStorage";

export default function Home() {
  const [users, setUsers] = useState(getUsers());

  const handleRemoveData = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all data");
    if (confirmClear) {
      localStorage.removeItem("userData");
      // Clear the users object in the state
      setUsers({}); 
    }
  };

  return (
    <div>
      <div className={home.nav}>
        <h1>Welcome to home page</h1>
        <button onClick={handleRemoveData} className={home.clearBtn}>Clear all details</button>
      </div>
      <h1 style={{float:'left'}}>{users.firstName}&nbsp;{users.lastName}</h1>
    </div>
  );
}

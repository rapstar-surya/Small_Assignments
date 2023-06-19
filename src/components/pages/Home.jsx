import React, { useState } from "react";
import home from "../css/Home.module.css";
import { getUsers } from "../utils/localStorage";

export default function Home() {
  const [users, setUsers] = useState(getUsers());

  

  return (
    <div>
      <div className={home.nav}>
        <h1>User Management Application</h1>
        
      </div>
      <h1 style={{float:'left'}}>{users.firstName}&nbsp;{users.lastName}</h1>
    </div>
  );
}

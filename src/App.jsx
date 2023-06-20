import React from "react";
import './App.css'

import Home from "./components/pages/Home";
import UserForm from "./components/pages/UserForm";
import EditUser from "./components/pages/EditUser";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/edit" element={<EditUser/>} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  
  return (
    <nav className="nav">
      <Link to='/'>Main Page</Link>
      <Link to='/form'>Form</Link>
    </nav>
  );
}

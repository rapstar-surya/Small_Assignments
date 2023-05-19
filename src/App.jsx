import React from "react";
import './App.css'

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Task from "./components/pages/Task";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  
  return (
    <nav className="nav">
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/task'>Task</Link>
    </nav>
  );
}

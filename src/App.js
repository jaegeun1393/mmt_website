import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./NavBar";
import Home from "./Home";
import Instructors from "./Instructors";
import BlogContents from "./BlogPage";
import ContactInformation from "./ContactInformation";
import ClassContents from "./ClassContents";
import Testmonial from "./Testmonial";
import BlogWriting from "./BlogWriting";
import PaymentReport from "./PaymentReport";
import Login from "./login/loginNsignup";
import Signup from "./login/signup";

import M_Dashboard from "./dashboard/manager_dashboard/m_dashboard"

import "./App.css";
import Post from "./post";

function App() {
  document.title = "MMT Prep";

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Instructors" element={<Instructors />} />
        <Route path="/BlogContents" element={<BlogContents />} />
        <Route path="/ContactInformation" element={<ContactInformation />} />
        <Route path="/ClassContents" element={<ClassContents />} />
        <Route path="/Testmonial" element={<Testmonial />} />
        <Route path="/BlogWriting" element={<BlogWriting />} />
        <Route path="/PaymentReport" element={<PaymentReport />} />
        <Route path="/post/:id" element={<Post />} />

        <Route path="/dashboard/manager" element={<M_Dashboard />}>

        </Route>

      </Routes>
    </div>
  );
}

export default App;

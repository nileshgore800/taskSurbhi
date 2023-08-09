import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import NavbarM from "./components/mainpages/NavbarM";
import Home from "./components/mainpages/Home";
import About from "./components/mainpages/About";
import Contact from "./components/mainpages/Contact";
import SidebarNav from "./components/mainpages/SidebarNav";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="navbar" element={<NavbarM />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sidebar" element={<SidebarNav />} />
        <Route path="*" element={<h3>Error Page 404</h3>} />
      </Routes>
    </>
  );
};

export default App;

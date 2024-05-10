import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";
import Login from "./assets/components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/contact" element={<Contact />} />
            <Route path="/home/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

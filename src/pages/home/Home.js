import React from "react";
import { Routes, Route } from "react-router-dom";
//import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Navbar from "../../components/navbar/Navbar";
import CheckUrl from "../checkurl/CheckUrl";
import Features from "../../components/features/Features";
import Login from "../../components/login/Login";
import About from "../../components/about/About";
function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="checkurl" element={<CheckUrl />} />
        <Route path="features" element={<Features />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;

//import variable.css
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Details = lazy(() => import("./pages/Details"));
const Admin = lazy(() => import("./pages/Admin"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <>
      <Navbar color="white" />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;

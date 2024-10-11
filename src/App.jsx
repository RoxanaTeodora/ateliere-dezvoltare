//import variable.css
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Auth/Auth';

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Details = lazy(() => import("./pages/Details"));
const Admin = lazy(() => import("./pages/Admin"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));

const App = () => {
  
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <div>
      {user ? (
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
      ) : (
        <>
          <Navbar color="white" />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

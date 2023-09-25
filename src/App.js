import React from "react";
import "./App.css";

import { Navbar } from "./components/navbar/Navbar";
import { Welcome } from "./components/welcome/Welcome";
import { Work } from "./components/work/Work";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="landing_container">
      <Navbar />
      <Welcome />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

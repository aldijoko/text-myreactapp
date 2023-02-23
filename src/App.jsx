import React from "react";
import { useState } from "react";
import "./App.css";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics/>
    </div>
  );
}

export default App;

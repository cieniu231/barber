import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar  from "./components/navigation";
import Home from "./components/home"
import About from "./components/about";
import Reservation from "./components/reservation";
import { Route, Routes } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/reservation" element={<Reservation/>} />
        </Routes>
    </div>
  );
}

export default App;

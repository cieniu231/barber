import './App.css';
import React from "react";
import Navbar  from "./components/navigation";
import Home from "./components/home"
import About from "./components/about";
import Reservation from "./components/reservation";
import Prices from "./components/prices";
import Blog from "./components/blog";
import { Route, Routes } from "react-router-dom";
import {ThemeProvider, useTheme} from './components/ThemeContext'
import BlogDetails from "./components/blogdetails";
import Create from "./components/newblog";
import NotFound from "./components/NotFound";

function App() {



  return (
      <ThemeProvider>
          <div className="App" >
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/reservation" element={<Reservation/>} />
              <Route path="/prices" element={<Prices/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/newblog" element={<Create/>} />
              <Route path="/blogs/:id" element={<BlogDetails/>} />
              <Route path="*" element={<NotFound/>} />

            </Routes>
          </div>
      </ThemeProvider>

  );
}

export default App;

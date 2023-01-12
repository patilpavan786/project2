import React from "react"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Login from "./Login";
import Register from "./Register";
import Error from "./Error ";
import AboutUs from "./AboutUs";
import Trainers from "./Trainers";

function App() {
  return (
    <>
   
   <BrowserRouter>
  
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/Login" element={<Login />}/>
   <Route path="/Register" element={<Register />}/>
   <Route path="/Aboutus" element={<AboutUs />}/>
   <Route path="/Trainers" element={<Trainers />}/>
   <Route path="*" element={<Error />}/>
   </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;
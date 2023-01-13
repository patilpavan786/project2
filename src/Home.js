import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import home from "./Home.module.css";
import person from "./Component/image/pavan.png";

import { NavLink } from "react-router-dom";
import Price from "./Price";
import Program from "./Program";
import MeetOurTeam from "./MeetOurTeam";

function Home() {
  const[isJoinUsClicked,setIsJoinUsClicked]= useState(false)
  return (
    <>
    <Header />
    <div className={home.container}>
      
      <div className={home.body}>
        <img style={{ width: "70%" }} src={person} />
     <div>  <h1>
          "TAKE care of your body. <br />
          it's the only place you <br />
          have to live."
        </h1>
      <button onClick={()=> setIsJoinUsClicked(!isJoinUsClicked)}>Join-With-Us</button>
      {isJoinUsClicked && (
        <div className="Button">
           <NavLink to="/Login" className={home.btn}>LOGIN</NavLink>
           <NavLink to="/Register" className={home.btn}>Register</NavLink>
        </div>
      )}
      </div> 
      </div>
      </div>
      <Program />
      <MeetOurTeam />
       <Price />
       <Footer />
      </>
     
    
  );
}

export default Home;

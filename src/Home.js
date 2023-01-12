import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import home from "./Home.module.css";
import person from "./Component/image/pavan.png";

import { NavLink } from "react-router-dom";
import Price from "./Price";
import Program from "./Program";
import MeetOurTeam from "./MeetOurTeam";

function Home() {
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
      <button >  <NavLink to="/Login" className={home.btn}>
             Join with Us
            </NavLink></button>
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

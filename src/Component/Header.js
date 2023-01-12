import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Homestyle from "./Header.module.css";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

export default function Header() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={Homestyle.Nav}>
        <div className={Homestyle.logo}>
          <NavLink
            className={Homestyle.navbarbrand}
            style={{ fontSize: 40 }}
            to="/"
            onClick={() => scroll.scrollToTop()}
          >
            <i class="fa fa-duotone fa-dumbbell"></i>
            <i class="fa fa-duotone fa-dumbbell"></i>
          </NavLink>
        </div>
        <div className={Homestyle.links} id={show ? " " : Homestyle.Menu}>
          <Link
            activeClass="active"
            onClick={() => scroll.scrollToTop()}
            spy={true}
            smooth={true}
          >
            Home
          </Link>
          <Link activeClass="active" to="program" spy={true} smooth={true}>
            Program
          </Link>
          
          <Link activeClass="active" to="meet" spy={true} smooth={true}>
            Team
          </Link>
          <Link activeClass="active" to="price" spy={true} smooth={true}>
            price
          </Link>
      
        
          <NavLink to="/Aboutus" className="btn btn-outline-dark">
            About-Us
          </NavLink>
          <NavLink to="/Register" className="btn btn-outline-dark">
            Joinus
          </NavLink>
        </div>

        <div className={Homestyle.mobile}>
          {show ? (
            <span
              style={{ fontSize: "3em" }}
              onClick={() => {
                setShow(false);
              }}
            >
              &#8801;
            </span>
          ) : (
            <span
              style={{ fontSize: "2em" }}
              onClick={() => {
                setShow(true);
              }}
            >
              &#10060;
            </span>
          )}
        </div>
      </div>
    </>
  );
}

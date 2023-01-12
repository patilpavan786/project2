import React from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import foot from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.main}>
      <div className="container">
        <div className="row">
          {/* coloum1 */}
          <div className="col">
            <NavLink
              className={foot.navbarbrand}
              style={{ fontSize: 40 }}
              to="/"
              onClick={() => scroll.scrollToTop()}
            >
              <i class="fa fa-duotone fa-dumbbell"></i>
              <i class="fa fa-duotone fa-dumbbell"></i>
            </NavLink>
          </div>
          <div className="col">
            <a style={{ color: "red" }} href="https://www.facebook.com/">
              <BsFacebook />
            </a>
            &nbsp;&nbsp;
            <a style={{ color: "red" }} href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            &nbsp;&nbsp;
            <a style={{ color: "red" }} href="https://www.twitter.com/">
              <AiFillTwitterCircle />
            </a>
            &nbsp;&nbsp;
            <a style={{ color: "red" }} href="https://www.youtube.com/">
              <AiFillYoutube />
            </a>
          </div>
          <div className="col">
            <h4>Healthy Living</h4>
            <ul className="'list">
              <li>Loreum</li>
              <li>Loreum ipsum</li>
              <li>Loreum ipsum ipsum</li>
            </ul>
          </div>
          <div className="col">
            <h4>Servive</h4>
            <ul className="'list">
              <li>Loreum</li>
              <li>Loreum ipsum</li>
              <li>Loreum ipsum ipsum</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className={style.col}>@2023 isr ALL rights copy reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

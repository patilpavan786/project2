import React from 'react'
import Reactplayer from"react-player"
import home from "./AboutUs.module.css"
import Footer from './Component/Footer'
import Header from './Component/Header'

function AboutUs() {
  return (
    <>
    <Header />
    <div id="about" className={home.aboutus}>
    <div className={home.aboutus1}>
      <div className={home.aboutus1a}>
   <iframe style={{}} src="https://www.youtube.com/embed/nFBdDaK_6Ko">

   </iframe>
   
      {/* <Reactplayer className={home.aboutus1aa} url="https://youtu.be/embed/nFBdDaK_6Ko"/> */}
      </div>
      <div className={home.aboutus1b}>
      <h3>About-Us</h3>
        <li>
          {" "}
          We know that building a positive culture is incredibly
          important.
        </li>
        <li>
          {" "}
          We believe in encouraging, supporting, challenging, learning and
          growing to be the best!
        </li>
        <li>
          {" "}
          Our flexible working solutions, gym rebates and educational
          opportunities create a positive work/life balance for all our em
        </li>
        <li>
          {" "}
          We believe in giving back and offering time, money and products
          to volunteer services and community organisations.
        </li>
        <li>
          {" "}
          we are committed to improving individuals' health, fitness, and
          well-being by supporting global and local charitie local sports
          teams, and events.
        </li>

        <button onClick={()=>
        alert("u r on about us")
      }
          style={{
            color:"red",
            width: "150px",
            height: "70px",
          }}
        >
          learn more
        </button>
      </div>
    </div>
    <div className={home.aboutus2}>
      <div className={home.aboutus2a}>
        <h2>Best Workout facility</h2>
        <li>Best Overall: 24-Hour Fitness</li>
        <li>Best Budget Membership: Planet Fitness</li>
        <li>Best for Frequent Travelers: Anytime Fitness</li>
        <li>Best for Bodybuilders: Gold's Gym</li>
        <li>Best for Luxury and Amenities: Equinox</li>
        <li>Best for Machines and Muscle Isolation: LA Fitness</li>
        <li>Best for Group Classes: Crunch Fitness.</li>
      </div>
      <div className={home.aboutus2b}>
<iframe style={{}} src="https://www.youtube.com/embed/3HK43u8w0zM"></iframe>

      {/* <Reactplayer url="https://youtu.be/3HK43u8w0zM"/> */}
      </div>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default AboutUs

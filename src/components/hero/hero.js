import { Link } from "gatsby"
import React from "react"
import "./hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="main-hero">
        <h1>TONY TAI NGUYEN</h1>
        <h2>I'm a software enginneer in Los Angeles, CA. I make web and mobile applications</h2>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>
    )
  }
}

export default Hero

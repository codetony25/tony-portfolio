import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./hero.css";

class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-hero">
        <h1>Tony Tai Nguyen</h1>
        <h2>I'm a web developer & programmer living in Los Angeles, CA. I make web applications usually with JavaScript.</h2>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>
    )
  }
}

export default Hero

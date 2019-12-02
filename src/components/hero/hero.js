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
        <h2>Full Stack Developer, Software Engineer, Coder, Problem Solver, whatever you want to call me.</h2>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>
    )
  }
}

export default Hero

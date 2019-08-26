import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitter, FaLinkedinIn, FaGithub, FaBars } from "react-icons/fa"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="left-nav">
      <nav>
        <ul className="desktop-nav">
          <li>
            <Link to="/" className="active">
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="middle-nav">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="right-nav">
      <div className="mobile-nav">
        <a>
          <FaBars />
        </a>
      </div>
      <ul className="desktop-social-nav">
        <li>
          <a
            href="https://www.linkedin.com/in/tony-nguyen-87b19585/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codetony25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_codetony"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

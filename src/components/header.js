import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="left-nav">
      <ul>
        <li>
          <Link to="/">portfolio</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
    <div className="middle-nav">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="right-nav">
      <ul>
        <li>
          <Link to="/">linkedIn</Link>
        </li>
        <li>
          <Link to="/">twitter</Link>
        </li>
        <li>
          <Link to="/">github</Link>
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

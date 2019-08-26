import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileNavigationActive: false,
    }
  }

  render() {
    const { siteTitle } = this.props

    return (
      <header
        style={{ height: this.state.isMobileNavigationActive ? "100vh" : 65 }}
      >
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
          <div className="navicon">
            <a
              onClick={() => this.setState({ isMobileNavigationActive: true })}
            >
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
        <div
          className="mobile-nav"
          style={{
            display: this.state.isMobileNavigationActive ? "block" : "none",
          }}
        >
          <div
            className="navicon-close"
            onClick={() => this.setState({ isMobileNavigationActive: false })}
          >
            <FaTimes />
          </div>
          <nav>
            <ul>
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
          <ul className="mobile-social-nav">
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

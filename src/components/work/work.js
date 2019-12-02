import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./work.css"

class Work extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-work">
        <ul>
          <li>
            <a className="lottogopher" href="https://lottogopher.com"></a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Work

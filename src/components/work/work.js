import React from "react"
import WorkItem from "./workItem";
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
            <WorkItem />
          </li>
        </ul>
      </div>
    )
  }
}

export default Work

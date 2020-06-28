import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Image from "../../components/image"
import "./work.css"

class WorkItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="work-item">
        <Image />
      </div>
    )
  }
}

export default WorkItem

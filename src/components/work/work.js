import React from "react"
import InnokinImage from "./innokin-image"
import PetTreatLoveImage from "./pettreatlove-image"
import PaintLaughLoveImage from "./paintlaughlove-image"
import VictoriaMyNguyenImage from "./victoriamynguyen-image"
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
            <div className="work-item">
              <a href="http://dev.pettreatlove.com/" target="_blank">
                <PetTreatLoveImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a href="https://paintlaughlove.com/" target="_blank">
                <PaintLaughLoveImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a href="https://victoriamynguyen.com/" target="_blank">
                <VictoriaMyNguyenImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a href="https://www.innokin.com/" target="_blank">
                <InnokinImage />
              </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Work

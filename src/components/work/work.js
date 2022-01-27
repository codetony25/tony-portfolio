import React from "react"
import TechFoxImage from "./tech-fox-image"
import PetTreatLoveImage from "./pettreatlove-image"
import LottoGopherEmailImage from "./lottogopher-image"
import VictoriaMyNguyenImage from "./victoriamynguyen-image"
import "./work.css"

class Work extends React.Component {
  render() {
    return (
      <div className="main-work">
        <ul>
        <li>
            <div className="work-item">
              <a
                href="https://tech.fox.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TechFoxImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a
                href="https://codetony25.github.io/pet-treat-love/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PetTreatLoveImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a
                href="https://victoriamynguyen.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VictoriaMyNguyenImage />
              </a>
            </div>
          </li>
          <li>
            <div className="work-item">
              <a
                href="https://codetony25.github.io/lottogopher-emails/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LottoGopherEmailImage />
              </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Work

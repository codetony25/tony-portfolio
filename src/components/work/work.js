import React from "react"
import InnokinImage from "./innokin-image"
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
                href="https://www.innokin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InnokinImage />
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

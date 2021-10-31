import React from "react"
import Fade from "react-reveal/Fade"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom>
            <a
              href="https://drive.google.com/file/d/1pAnqC3yTdiF6-svNyUxxwzHcOe4_pYbq/view?usp=sharing"
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD RESUME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Promotion

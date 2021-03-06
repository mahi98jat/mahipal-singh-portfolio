import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"
const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{data.headerTagline[0]}</h1>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>{data.headerTagline[1]}</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            {/* <a
              // href={`mailto:${
              //   data.contactEmail ? data.contactEmail : "mahi98jat@gmail.com"
              // }`}
              <button onClick={() => scrollTo("#contact")}>Contact</button>
              className="primary-btn"
            >
              CONNECT WITH ME
            </a> */}
            <button className="primary-btn" onClick={() => scrollTo("#contact")}>CONNECT WITH ME</button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header

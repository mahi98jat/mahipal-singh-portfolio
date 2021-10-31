import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, gitHub  }) => {
  return (
    <>
      <a
        style={{
          textDecoration: "none",
          float: "right",
        }}
        href={`${gitHub}`}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn"
      >
        GitHub
      </a>
      <div
        className="card"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
            imgUrl +
            ")",
        }}
      >
        {" "}
        <div className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        </div>
      </div>
    </>
  )
}

export default Card

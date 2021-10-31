import React from "react"
import data from "../yourdata"
import { useState } from "react"
const Skills = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div
                onMouseOver={() => {
                  setIsHover(true)
                }}
                onMouseOut={() => {
                  setIsHover(false)
                }}
                className="skill"
                key={index}
              >
                <img src={skill.img} alt="css"></img>
                {/* {isHover ? <p>{skill.para}</p> : <p>{skill.title}</p>} */}
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

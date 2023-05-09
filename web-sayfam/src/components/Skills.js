import React from "react";

const skillsData = [
  {
    name: "Java Script",
    description:
      "A versatile programming language commonly used for web development. Used to create interactive user interfaces and dynamic websites.",
  },
  {
    name: "React.Js",
    description:
      "A popular JavaScript library used for building user interfaces. Allows for efficient and reusable components that update in real time.",
  },
  {
    name: "Redux",
    description:
      "A predictable state container for JavaScript apps. Used to manage application state in large-scale and complex projects.",
  },
  {
    name: "CSS",
    description:
      "A styling language used to create visually appealing and responsive websites. Allows for the separation of presentation and content.",
  },
  {
    name: "HTML",
    description:
      "The standard markup language used for creating web pages. Provides the structure and content of a webpage.",
  },
  {
    name: "Python",
    description:
      "A high-level programming language used for a variety of purposes, from web development to data analysis and machine learning.",
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsList">
        {skillsData.map((skill) => (
          <div className="skillsListGroup" key={skill.name}>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

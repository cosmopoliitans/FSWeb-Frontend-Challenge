import React from "react";

export default function Projects() {
  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>Projects</h3>
      <div className="kartlarGrup">
        <div className="projects-list">
          <img src=".\icons\Rectangle 41.png" />
          <h4>Workintech</h4>
          <p className="aciklama">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes
          </p>
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <p>GitHub</p>
            <p>Viev Site</p>
          </div>
        </div>
      </div>
    </div>
  );
}

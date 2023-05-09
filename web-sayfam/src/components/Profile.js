import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>Profile</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>Profile</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>Date of birth</p>
              <p>City of residence</p>
              <p>Educational status</p>
              <br />
              <br />
              <p>Preferred role</p>
            </div>
            <div className="sagBolum">
              <p>14.02.1995</p>
              <p>İstanbul</p>
              <p>
                Erciyes Unv. ETM
                <br />
                Licence, 2020
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="aboutMe">
          <h4>About Me</h4>
          <p>
            I studied Industrial Design Engineering at Erciyes University. I
            have developed myself in research, self-motivation, entrepreneurship
            and acquiring different skills during my education. That's why I
            think I will adapt easily to team. I completed my internship in the
            department of automotive at Teknokaucuk AS. I have been in Portugal
            for 6 months with Erasmus project. <br /> <br /> I have enrolled in
            a 6-month intensive and accelerated full stack web development
            online school with{" "}
            <span style={{ color: "#4731d3" }}>Workintech</span> , where I learn
            and implement real-life software projects within team environments.
            Through this program, I have gained proficiency in various
            technologies and actively participated in project development.
          </p>
        </div>
      </div>
    </div>
  );
}

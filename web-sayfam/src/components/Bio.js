import React from "react";

export default function Bio() {
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>Elif Koyun</p>
        </div>
        <h2>
          Creative thinker
          <br />
          Minimalism lover
        </h2>
        <p className="isimP">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <div className="buttons">
          <div className="button-1">
            <p>Hire me</p>
          </div>
          <div className="button-2">
            <img src=".\icons\github.png" />
            <a href="https://github.com/cosmopoliitans">
              <p>GitHub</p>
            </a>
          </div>
          <div className="button-2">
            <img src=".\icons\LinkedIn.png" />
            <a href="https://www.linkedin.com/in/elif-koyun-3ba895154/">
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
      <img src=".\icons\image1.png" />
    </div>
  );
}

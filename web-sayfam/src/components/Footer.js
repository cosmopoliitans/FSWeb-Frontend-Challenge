import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <h3 className="letsWork">
        Let's work together on
        <br />
        your next product.
      </h3>
      <div className="rectangle">
        <a className="email" href="mailto:elfkyn52@gmail.com">
          <img src=".\icons\el.svg" />
          <p className="emailcss">elfkyn52@gmail.com</p>
        </a>

        <nav className="sagF">
          <a className="sagF1" href="">
            Personal Blog
          </a>
          <a className="sagF2" href="https://github.com/cosmopoliitans">
            GitHub
          </a>
          <a
            className="sagF3"
            href="https://www.linkedin.com/in/elif-koyun-3ba895154/"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer({ language }) {
  return (
    <div className="footer">
      {language === "en" ? (
        <h3 className="letsWork">
          Let's team up and make your next
          <br />
          product a success.
        </h3>
      ) : (
        <h3 className="letsWork">
          Ekip olalım ve bir sonraki ürününüzü
          <br />
          başarıya ulaştıralım.
        </h3>
      )}
      <div className="rectangle">
        <a className="email" href="mailto:elfkyn52@gmail.com">
          <img src=".\icons\el.svg" alt="icon" />
          <p className="emailcss">elfkyn52@gmail.com</p>
        </a>

        <nav className="sagF">
          {/* <a className="sagF1" href="#">
            Personal Blog
          </a> */}
          <a
            className="sagF2"
            href="https://github.com/cosmopoliitans"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="sagF3"
            href="https://www.linkedin.com/in/elif-koyun-3ba895154/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}

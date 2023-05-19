import React from "react";
import { Link } from "react-scroll";

export default function Bio({ language }) {
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>Elif Koyun</p>
        </div>
        {language === "en" ? (
          <div>
            <h2>
              Solutions for
              <br />
              Applications
            </h2>{" "}
            <br /> <br />
            <p className="isimP">
              Hi, I'm Elif, a Full Stack Web Developer based in Istanbul.👩‍💻 I
              specialize in developing modern web applications using the latest
              technologies. I'm always exploring new technologies and keeping up
              with the latest trends in the industry to provide the best
              possible solutions to my clients. Welcome to my website, and feel
              free to reach out to me for any inquiries.
            </p>
          </div>
        ) : (
          <div>
            <h2>
              Web Uygulamaları
              <br />
              için Çözümler
            </h2>
            <p className="isimP">
              Merhaba, ben Elif. İstanbul'da yaşayan bir Full Stack Web
              Geliştiricisi'yim.👩‍💻Sürekli olarak yeni teknolojileri keşfediyor
              ve endüstrideki en son trendleri takip ederek müşterilerime en iyi
              çözümleri sunmaya çalışıyorum. Web siteme hoş geldiniz ve herhangi
              bir soru için benimle iletişime geçmekten çekinmeyin.
            </p>
          </div>
        )}
        {language === "en" ? (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>Contact me</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a
                href="https://github.com/cosmopoliitans"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a
                href="https://www.linkedin.com/in/elif-koyun-3ba895154/"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="buttons">
            <div className="button-1">
              <Link to="footer" smooth={true} duration={2000}>
                <p>İletişime geç</p>
              </Link>
            </div>
            <div className="button-2">
              <img src=".\icons\github.png" alt="github" />
              <a
                href="https://github.com/cosmopoliitans"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub</p>
              </a>
            </div>
            <div className="button-2">
              <img src=".\icons\LinkedIn.png" alt="linkedIn" />
              <a
                href="https://www.linkedin.com/in/elif-koyun-3ba895154/"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        )}
      </div>

      <img className="pPhoto" src=".\icons\elif.png" alt="icon" />
    </div>
  );
}

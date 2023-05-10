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
              Web Applications
            </h2>{" "}
            <br /> <br />
            <p className="isimP">
              Hi, I'm Elif, a Full Stack Web Developer based in Istanbul.👩‍💻 I
              specialize in developing modern web applications using the latest
              technologies. With 1 years of experience in the industry, I have
              worked on various projects ranging from small-scale websites to
              large-scale applications. My passion for web development drives me
              to create custom solutions that meet the unique needs of my
              clients. I'm always exploring new technologies and keeping up with
              the latest trends in the industry to provide the best possible
              solutions to my clients. Welcome to my website, and feel free to
              reach out to me for any inquiries.
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
              Geliştiricisi'yim.👩‍💻 En son teknolojileri kullanarak modern web
              uygulamaları geliştirmede uzmanım. 1 yıllık endüstri deneyimimle,
              küçük ölçekli web sitelerinden büyük ölçekli uygulamalara kadar
              çeşitli projeler üzerinde çalıştım. Web geliştirme konusundaki
              tutkum, müşterilerimin özel ihtiyaçlarını karşılayan
              özelleştirilmiş çözümler oluşturmama yol açıyor. Sürekli olarak
              yeni teknolojileri keşfediyor ve endüstrideki en son trendleri
              takip ederek müşterilerime en iyi çözümleri sunmaya çalışıyorum.
              Web siteme hoş geldiniz ve herhangi bir soru için benimle
              iletişime geçmekten çekinmeyin.
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

      <img src=".\icons\image1.png" alt="icon" />
    </div>
  );
}

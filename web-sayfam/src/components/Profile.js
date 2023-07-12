import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Profile" : "Profil"}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehrim"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgilerim"}
              </p>
              <br />
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiğim rol"}
              </p>
            </div>
            <div className="sagBolum">
              <p>14.02.1995</p>
              <p>İstanbul</p>
              <p>
                Erciyes Unv. ETM
                <br />
                {language === "en" ? "Licence" : "Lisans"}, 2020
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        {language === "en" ? (
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
              I studied Industrial Design Engineering at Erciyes University.I
              had developed myself in research, self-motivation,
              entrepreneurship and acquiring different skills during my
              education. That's why I think I will adapt easily to team.
              I have been in Portugal for 6 months with Erasmus
              project. <br /> <br /> I have enrolled in a 6-month intensive and
              accelerated full stack web development online school with
              <span style={{ color: "#4731d3" }}> Workintech</span> , where I
              learn and implement real-life software projects within team
              environments. Through this program, I have gained proficiency in
              various technologies and actively participated in
              project development.
            </p>
          </div>
        ) : (
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
              Erciyes Üniversitesi'nde Endüstriyel Tasarım Mühendisliği okudum.
              Eğitimim süresince araştırma, öz motivasyon, girişimcilik ve
              farklı beceriler edinme konularında kendimi geliştirdim. Bu yüzden
              takıma kolayca uyum sağlayacağımı düşünüyorum. Stajımı Teknokaucuk
              A.Ş.'de otomotiv bölümünde tamamladım. Erasmus projesi ile 6 ay
              Portekiz'de bulunma şansım oldu. <br /> <br />
              <span style={{ color: "#4731d3" }}>Workintech</span> ile 6 aylık
              yoğun ve hızlandırılmış bir tam yığın web geliştirme çevrimiçi
              okuluna kaydoldum, burada ekip ortamlarında gerçek hayattaki
              yazılım projelerini öğrenip uyguluyorum. Bu program sayesinde
              çeşitli teknolojilerde yeterlilik kazandım ve proje geliştirmede
              aktif olarak yer aldım.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

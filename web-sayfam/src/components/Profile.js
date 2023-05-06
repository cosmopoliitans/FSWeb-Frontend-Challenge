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
              <p>Doğum Tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu</p>
              <br />
              <br />
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="sagBolum">
              <p>14.02.1995</p>
              <p>İstanbul</p>
              <p>
                Erciyes Ünv. ETM
                <br />
                Lisans, 2020
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <br />
            <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
            quod deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

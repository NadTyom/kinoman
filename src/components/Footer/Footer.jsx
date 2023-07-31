import React from "react";
import logo from "../../images/logo.png";
export default function Footer() {
  const about = [
    { title: "Գովազդ", photo: "images/facebookicon.png" },
    { title: "Համաձայնութուն", photo: "images/tvitericon.png" },
    { title: "Բլոգ", photo: "images/googleicon.png" },
    { title: "Սպասարկում", photo: "images/youtubeicon.png" },
  ];
  return (
    <div className="footer">
      <div className="parentlogos">
        {about.map((elm, index) => (
          <div key={index}>
            <img src={require("../../" + elm.photo)} alt={elm.title} />
            <p>{elm.title}</p>
          </div>
        ))}
      </div>
      <div className="footerEnd">
        <div className="logoSection">
          <img alt="nkarlogo" src={logo} />
          <div className="logoAbout">
            <p>
              Կինո<span>Ման</span>
            </p>
            <b>Օնլայն Կինոթատրոն</b>
          </div>
        </div>
      </div>
    </div>
  );
}

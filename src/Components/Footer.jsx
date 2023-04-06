import React, { useContext } from "react";
import logo from "../assets/DH.png";
import iconoFacebook from "../assets/ico-facebook.png";
import iconoInstagram from "../assets/ico-instagram.png";
import iconoWhatsapp from "../assets/ico-whatsapp.png";
import iconoTiktok from "../assets/ico-tiktok.png";
import { ContextGlobal } from "../Components/utils/global.context";

const Footer = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src={logo} alt='DH-logo'/>
      <div>
        <img src={iconoFacebook} alt="icono de facebook" className="icons" />
        <img src={iconoInstagram} alt="icono de instagram" className="icons" />
        <img src={iconoWhatsapp} alt="icono de whatsapp" className="icons" />
        <img src={iconoTiktok} alt="icono de tiktok" className="icons" />
      </div>
    </footer>
  )
}

export default Footer

import React from "react";
import "./footerStyles.css";
import { FooterContainer } from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-banner">
        <h2>SUBE DE NIVEL TU ESTILO</h2>
        <img src="https://imgur.com/2LpxlXb.png" />
      </div>

      <div className="footer-info">
        <div className="footer-title">
          <h2>GAMER GOODS</h2>
        </div>

        <div className="footer-description">
          <div className="footer-column">
            <div className="footer-desc-title">Contacto</div>
            <div className="footer-desc-info">
              <p>gamergoods@gmail.com</p>
              <p>+1-2345-6789</p>
              <p>123 Ave, New York, USA</p>
            </div>
            <div className="footer-desc-icons"></div>
          </div>

          <div className="footer-column">
            <div className="footer-desc-title">Productos</div>
            <div className="footer-desc-info">
              <p>Franquicias</p>
              <p>Consolas</p>
              <p>Género</p>
              <p>PC</p>
              <p>Coolstuff</p>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-desc-title">Sobre</div>
            <div className="footer-desc-info">
              <p>Egestas vitae.</p>
              <p>Viverra lorem ac.</p>
            </div>
          </div>
        </div>

        <div className="footer-create-by">Copyright &copy; 2024. Created By ❤JEC</div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

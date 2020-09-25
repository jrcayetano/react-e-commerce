import React from "react";

const Footer = () => {
  return (
    <footer className="navbar">
      <div className="footer">
        <div className="footer__contact">
          <div className="footer__contact__information">
            <span className="column-title">Información de contacto</span>
            <div className="footer__contact__information__address">
              <span className="title-section">Dirección</span>
              <span>Calatraba, 6, 08017 Barcelona</span>
            </div>
            <div className="footer__contact__information__phone">
              <span className="title-section">Teléfono</span>
              <span>+34 666666666</span>
            </div>
            <div className="footer__contact__information__email">
              <span className="title-section">E-mail</span>
              <span>be-commerce@mail.com</span>
            </div>
            <div className="footer__contact__information__time">
              <span className="title-section">Horario de atención</span>
              <span>Lun - Vie / 10:00 - 14:00</span>
            </div>
          </div>
          <div className="footer__contact__client">
            <span className="column-title">Atención al cliente</span>
            <div className="footer__contact__client__time">
              <span className="title-section">Horario de atención</span>
              <span>Lun - Vie / 10:00 - 14:00</span>
            </div>
            <div className="footer__contact__client__email">
              <span className="title-section">E-mail</span>
              <span>atencion.cliente@mail.com</span>
            </div>
            <div className="footer__contact__client__whatsapp">
              <span className="title-section">Whatsapp</span>
              <span>+34 654 987 765</span>
            </div>
          </div>
        </div>
        <div className="container footer-wrap">
          <ul>
            <li>
              <a href="." className="footer-wrap__link--white">
                Condiciones de Uso y de venta
              </a>
            </li>
            <li>
              <a href="." className="footer-wrap__link--white">
                Aviso de privacidad
              </a>
            </li>
            <li>
              <a href="." className="footer-wrap__link--white">
                Área legal
              </a>
            </li>
            <li>
              <a href="." className="footer-wrap__link--white">
                Cookies
              </a>
            </li>
            <li>
              <a href="." className="footer-wrap__link--white">
                Publicidad basada en intereses
              </a>
            </li>
          </ul>
          <span className="footer-wrap__reserved-rights">
            1996-2020, E-commerce.com inc o afilidados. Todos los derechos
            reservados
          </span>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

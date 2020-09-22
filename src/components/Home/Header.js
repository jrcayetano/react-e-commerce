import React, { useState } from "react";
import brand from "./../../assets/images/brand.svg";

const Header = () => {
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);

  const handleOnSelectMenu = () => {};
  const handleMenuCollapse = () => setIsMenuCollapse(!isMenuCollapse);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand"
        onClick={() => this.handleOnSelectMenu("productsMenu")}
      >
        <img
          src={brand}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        E-commerce
      </a>
      <div className="header__action-bar">
        {/* <app-basket className="d-block d-lg-none"></app-basket> */}

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isMenuCollapse ? true : false}
          aria-label="Toggle navigation"
          onClick={handleMenuCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`${isMenuCollapse ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <h4 className="d-block d-lg-none">Mi perfil</h4>
        <ul className="navbar-nav d-block d-lg-none">
          <li className="nav-item">
            <a className="nav-link" onClick={handleMenuCollapse}>
              Editar perfil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleMenuCollapse}>
              Pedidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleMenuCollapse}>
              Productos Favoritos
            </a>
          </li>
        </ul>
        <h4 className="d-block d-lg-none">Tienda</h4>
        <ul className="navbar-nav">
          <li className="nav-item" onClick={handleOnSelectMenu}>
            <a className="nav-link" onClick={handleMenuCollapse}>
              Productos
            </a>
          </li>
          <li className="nav-item" onClick={handleOnSelectMenu}>
            <a className="nav-link" onClick={handleMenuCollapse}>
              Ofertas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Header);

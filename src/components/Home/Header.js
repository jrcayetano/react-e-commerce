import React, { useState } from "react";
import brand from "./../../assets/images/brand.svg";
import LoggedUser from "./LoggedUser";
import Basket from "./Basket";
import {
  USER_PATH,
  EDIT_PROFILE_PATH,
  USER_ORDERS_PATH,
  USER_FAVORITE_PRODUCTS_PATH,
  PRODUCTS_PATH,
  OFFERS_PATH,
} from "./../../consts/paths";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { connect, useDispatch } from "react-redux";
import { MenuEnum } from "./../../consts/MenuEnum";
import { SET_MENU } from "./../../state/actions/AppActions";

const Header = ({ selectedMenu }) => {
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);
  const dispatch = useDispatch();

  const handleMenuCollapse = () => setIsMenuCollapse(!isMenuCollapse);
  const handleOnSelectMenu = (menu) => {
    dispatch(SET_MENU(menu));
    handleMenuCollapse();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        href="."
        className="navbar-brand"
        onClick={() => handleOnSelectMenu("productsMenu")}
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
        <span className="d-block d-lg-none">
          <Basket />
        </span>

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
          <li className="nav-item" onClick={handleMenuCollapse}>
            <Link to={`${USER_PATH}/${EDIT_PROFILE_PATH}`} className="nav-link">
              Editar perfil
            </Link>
          </li>
          <li className="nav-item" onClick={handleMenuCollapse}>
            <Link to={`/${USER_PATH}/${USER_ORDERS_PATH}`} className="nav-link">
              Pedidos realziados
            </Link>
          </li>
          <li className="nav-item" onClick={handleMenuCollapse}>
            <Link
              to={`/${USER_PATH}/${USER_FAVORITE_PRODUCTS_PATH}`}
              className="nav-link"
            >
              Productos favoritos
            </Link>
          </li>
        </ul>
        <h4 className="d-block d-lg-none">Tienda</h4>
        <ul className="navbar-nav">
          <li
            className={classnames({
              "nav-item": true,
              active: selectedMenu === MenuEnum.Products ? true : false,
            })}
            onClick={() => handleOnSelectMenu(MenuEnum.Products)}
          >
            <Link to={`/${PRODUCTS_PATH}`} className="nav-link">
              Productos
            </Link>
          </li>
          <li
            className={classnames({
              "nav-item": true,
              active: selectedMenu === MenuEnum.Offers ? true : false,
            })}
            onClick={() => handleOnSelectMenu(MenuEnum.Offers)}
          >
            <Link to={`/${OFFERS_PATH}`} className="nav-link">
              Ofertas
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__right-part d-none d-lg-block">
        <LoggedUser />
        <Basket />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  selectedMenu: state.app.selectedMenu,
});

export default connect(mapStateToProps)(React.memo(Header));

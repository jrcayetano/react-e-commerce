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
import { setMenu } from "./../../state/actions/AppActions";

const Header = ({ selectedMenu, isLogged }) => {
  const [isMenuCollapse, setIsMenuCollapse] = useState(true);
  const dispatch = useDispatch();

  const handleMenuCollapse = () => setIsMenuCollapse(!isMenuCollapse);

  const handleOnSelectMenu = (menu) => {
    dispatch(setMenu(menu));
    handleMenuCollapse();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to={`/${PRODUCTS_PATH}`}
        className="navbar-brand"
        onClick={() => handleOnSelectMenu(MenuEnum.PRODUCTS)}
      >
        <img
          src={brand}
          width="30"
          height="30"
          className="d-inline-block align-top brand-image"
          alt=""
        />
        E-commerce
      </Link>
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
        className={`${isMenuCollapse ? "collapse" : ""} navbar-collapse mobile`}
        id="navbarsExample09"
      >
        {isLogged && (
          <>
            <h4 className="d-block d-lg-none">Mi perfil</h4>
            <ul className="navbar-nav d-block d-lg-none">
              <li
                className={classnames({
                  "nav-item": true,
                  active: selectedMenu === MenuEnum.EDIT_PROFILE ? true : false,
                })}
                onClick={handleMenuCollapse}
              >
                <Link
                  to={`${USER_PATH}/${EDIT_PROFILE_PATH}`}
                  className="nav-link"
                  onClick={() => handleOnSelectMenu(MenuEnum.EDIT_PROFILE)}
                >
                  Editar perfil
                </Link>
              </li>
              <li
                className={classnames({
                  "nav-item": true,
                  active: selectedMenu === MenuEnum.ORDERS ? true : false,
                })}
                onClick={handleMenuCollapse}
              >
                <Link
                  to={`/${USER_PATH}/${USER_ORDERS_PATH}`}
                  className="nav-link"
                  onClick={() => handleOnSelectMenu(MenuEnum.ORDERS)}
                >
                  Pedidos realziados
                </Link>
              </li>
              <li
                className={classnames({
                  "nav-item": true,
                  active: selectedMenu === MenuEnum.FAVORITES ? true : false,
                })}
                onClick={handleMenuCollapse}
              >
                <Link
                  to={`/${USER_PATH}/${USER_FAVORITE_PRODUCTS_PATH}`}
                  className="nav-link"
                  onClick={() => handleOnSelectMenu(MenuEnum.FAVORITES)}
                >
                  Productos favoritos
                </Link>
              </li>
            </ul>
          </>
        )}
        {!isLogged && (
          <div
            className="login-button is-mobile d-block d-lg-none"
            onClick={handleMenuCollapse}
          >
            <LoggedUser mobile={true} />
          </div>
        )}
        <h4 className="d-block d-lg-none">Tienda</h4>
        <ul className="navbar-nav">
          <li
            className={classnames({
              "nav-item": true,
              active: selectedMenu === MenuEnum.PRODUCTS ? true : false,
            })}
            onClick={() => handleOnSelectMenu(MenuEnum.PRODUCTS)}
          >
            <Link to={`/${PRODUCTS_PATH}`} className="nav-link">
              Productos
            </Link>
          </li>
          <li
            className={classnames({
              "nav-item": true,
              active: selectedMenu === MenuEnum.OFFERS ? true : false,
            })}
            onClick={() => handleOnSelectMenu(MenuEnum.OFFERS)}
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
  isLogged: state.userLogged.isLogged,
});

export default connect(mapStateToProps)(React.memo(Header));

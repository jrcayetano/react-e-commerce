import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { connect } from "react-redux";
import {
  LOGIN_PATH,
  USER_PATH,
  EDIT_PROFILE_PATH,
  USER_ORDERS_PATH,
  USER_FAVORITE_PRODUCTS_PATH,
} from "./../../consts/paths";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const LoggedUser = ({ username, isLogged }) => {
  let history = useHistory();

  const handleLoginClick = () => {
    history.push(`/${LOGIN_PATH}`);
  };

  if (isLogged) {
    return (
      <div className="logged-user">
        <DropdownButton
          id="dropdown-basic-button"
          title={username}
          className="logged-user__options"
        >
          <Dropdown.Item as={Link} to={`${USER_PATH}/${EDIT_PROFILE_PATH}`}>
            Editar perfil
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={`/${USER_PATH}/${USER_ORDERS_PATH}`}>
            Pedidos realizados
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={`/${USER_PATH}/${USER_FAVORITE_PRODUCTS_PATH}`}
          >
            Pedidos favoritos
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  } else {
    return (
      <div className="logged-user">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleLoginClick}
        >
          Identificarte
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  username: state.userLogged.username,
  isLogged: state.userLogged.isLogged,
});

export default connect(mapStateToProps)(React.memo(LoggedUser));

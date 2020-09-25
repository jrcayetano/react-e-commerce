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
import { setMenu } from "./../../state/actions/AppActions";
import { MenuEnum } from "./../../consts/MenuEnum";
import { useDispatch } from "react-redux";

const LoggedUser = ({ username, isLogged }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    history.push(`/${LOGIN_PATH}`);
  };

  const handleSelectMenu = (menu) => {
    dispatch(setMenu(menu));
  };

  if (isLogged) {
    return (
      <div className="logged-user">
        <DropdownButton
          id="dropdown-basic-button"
          title={username}
          className="logged-user__options"
        >
          <Dropdown.Item
            as={Link}
            to={`/${USER_PATH}/${EDIT_PROFILE_PATH}`}
            onClick={() => handleSelectMenu(MenuEnum.EDIT_PROFILE)}
          >
            Editar perfil
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={`/${USER_PATH}/${USER_ORDERS_PATH}`}
            onClick={() => handleSelectMenu(MenuEnum.ORDERS)}
          >
            Pedidos realizados
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={`/${USER_PATH}/${USER_FAVORITE_PRODUCTS_PATH}`}
            onClick={() => handleSelectMenu(MenuEnum.FAVORITES)}
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

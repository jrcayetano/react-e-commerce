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

/*
<div class="logged-user">
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          id="dropdown-basic"
          className="btn btn-outline-primary logged-user__options"
        >
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>*/

/*
<div class="logged-user">
  <div
    ngbDropdown
    class="d-inline-block"
    *ngIf="isLogged$ | async; else noLogged"
    placement="botton-right"
  >
    <button
      class="btn btn-outline-primary logged-user__options"
      id="dropdownBasic1"
      ngbDropdownToggle
    >
      {{ username$ | async }}
    </button>
    <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
      <button ngbDropdownItem (click)="onEditProfileClick()">
        Editar perfil
      </button>
      <button ngbDropdownItem (click)="onOrdersClick()">
        Pedidos realizados
      </button>
      <button ngbDropdownItem (click)="onFavoriteProductsClick()">
        Pedidos favoritos
      </button>
    </div>
  </div>
</div>

<ng-template #noLogged>
  <button type="button" class="btn btn-warning" (click)="handleLogin()">
    Identificarte
  </button>
</ng-template>

*/

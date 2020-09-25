import React from "react";
import LoginForm from "./LoginForm";
import { login, getUserByEmail } from "./../../services/Login.service";
import { useHistory } from "react-router";
import {
  PRODUCTS_PATH,
  REGISTER_PATH,
  OFFERS_PATH,
} from "./../../consts/paths";
import { useDispatch, connect } from "react-redux";
import {
  SetProfile,
  SetIsLogged,
  SetEmail,
  SetUsername,
} from "./../../state/actions/UserLoggedActions";
import { setToken } from "./../../state/actions/AppActions";
import { Link } from "react-router-dom";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";
import { MenuEnum } from "../../consts/MenuEnum";

const Login = ({ selectedMenu }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (formValues) => {
    login(formValues)
      .then((response) => getUserLoggedData(response.data, formValues))
      .catch((error) => toast(error.response.data, true));
  };

  const getUserLoggedData = (response, formValues) => {
    if (response && response.accessToken) {
      getUserByEmail(formValues.email)
        .then((userData) => saveLoggedUserDataInStore(response, userData.data))
        .catch((error) => toast(error.response.data, true));
    }
  };

  const toast = (message, isError = false) => {
    const toast = generateToast(message, isError);
    dispatch(setToast(toast));
    dispatch(showToast(true));
  };

  const saveLoggedUserDataInStore = (response, userData) => {
    dispatch(SetProfile(userData[0]));
    dispatch(setToken(response.accessToken));
    dispatch(SetIsLogged());
    dispatch(SetEmail(userData[0].email));
    dispatch(SetUsername(userData[0].username));
    if (selectedMenu === MenuEnum.PRODUCTS) {
      history.push(`/${PRODUCTS_PATH}`);
    } else if (MenuEnum.OFFERS) {
      history.push(`/${OFFERS_PATH}`);
    } else {
      history.push(`/${PRODUCTS_PATH}`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="login-form__wrapper">
            <h3 className="login-form__title title-page">Login de usuario</h3>
            <LoginForm onSubmit={handleSubmit} />
            <span>
              ¿Aún no eres usuario? Por favor registrate en el siguiente{" "}
              <Link to={`/${REGISTER_PATH}`}>enlace</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedMenu: state.app.selectedMenu,
});

export default connect(mapStateToProps)(React.memo(Login));

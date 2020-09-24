import React from "react";
import LoginForm from "./LoginForm";
import { login, getUserByEmail } from "./../../services/Login.service";
import { useHistory } from "react-router";
import { PRODUCTS_PATH, REGISTER_PATH } from "./../../consts/paths";
import { useDispatch } from "react-redux";
import {
  SetProfile,
  SetIsLogged,
  SetEmail,
  SetUsername,
} from "./../../state/actions/UserLoggedActions";
import { SET_TOKEN } from "./../../state/actions/AppActions";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (formValues) => {
    login(formValues).then((response) =>
      getUserLoggedData(response.data, formValues)
    );
  };

  const getUserLoggedData = (response, formValues) => {
    if (response && response.accessToken) {
      getUserByEmail(formValues.email).then((userData) =>
        saveLoggedUserDataInStore(response, userData.data)
      );
    }
  };

  const saveLoggedUserDataInStore = (response, userData) => {
    dispatch(SetProfile(userData[0]));
    dispatch(SET_TOKEN(response.accessToken));
    dispatch(SetIsLogged());
    dispatch(SetEmail(userData[0].email));
    dispatch(SetUsername(userData[0].username));
    history.push(`/${PRODUCTS_PATH}`);
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

export default Login;

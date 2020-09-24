import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { getStates } from "./../../services/States.service";
import { register } from "./../../services/Register.service";
import { LOGIN_PATH } from "./../../consts/paths";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Register = () => {
  const [states, setStates] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getStates()
      .then((response) => setStates(response.data))
      .catch((error) => toast(error.response.data, true));
  }, []);

  const toast = (message, isError = false) => {
    const toast = generateToast(message, isError);
    dispatch(setToast(toast));
    dispatch(showToast(true));
  };

  const handleSubmit = (formValues) => {
    register(formValues)
      .then((response) => {
        if (response && response.data) {
          toast("Usuario creado correctamente");
          history.push(`/${LOGIN_PATH}`);
        }
      })
      .catch((error) => toast(error.response.data, true));
  };

  return (
    <div className="container form__wrapper">
      <div className="row">
        <div className="col w-100">
          <h3 className="login-form__title title-page">
            Registro de nuevo usuario
          </h3>
          <RegisterForm states={states} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Register);

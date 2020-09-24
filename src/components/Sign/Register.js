import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { getStates } from "./../../services/States.service";

const Register = () => {
  const [states, setStates] = useState([]);

  useState(() => {
    console.log("a");
    getStates().then((response) => setStates(response.data));
  }, [states]);

  const handleSubmit = (formValues) => {
    console.log("form values", formValues);
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

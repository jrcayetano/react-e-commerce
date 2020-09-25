import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";

const LoginForm = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit(values) {
      setSubmitted(true);
      onSubmit(values);
    },
  });

  return (
    <form className="login-form" onSubmit={formik.handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="exampleInputEmail">email</label>
        <input
          name="email"
          type="text"
          className={classnames({
            "form-control": true,
            "is-invalid": formik.errors.email,
          })}
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {!formik.errors.email && (
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        )}

        {((formik.errors.email && formik.touched.email) || submitted) && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className={classnames({
            "form-control": true,
            "is-invalid": formik.errors.email,
          })}
          id="exampleInputPassword1"
          placeholder="Password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {((formik.errors.password && formik.touched.password) || submitted) && (
          <div className="invalid-feedback">{formik.errors.password}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary btn-form">
        Acceder
      </button>
    </form>
  );
};

export default React.memo(LoginForm);

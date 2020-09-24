import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

import classnames from "classnames";
import {
  VALID_ZIP_PATTERN,
  VALID_EMAIL_PATTERN,
  VALID_PASSWORD_PATTERN,
} from "./../../consts/patterns";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string()
    .required("Required")
    .matches(VALID_EMAIL_PATTERN, "Invalid email pattern"),
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string()
    .required("Required")
    .matches(VALID_ZIP_PATTERN, "Invalid zip, numeric field only"),
  password: Yup.string()
    .required("Required")
    .min(8, "Minimun length required 8")
    .matches(
      VALID_PASSWORD_PATTERN,
      "Invalid formar, must containe at least lowercase, uppercase,number, special character and a minium length of 8"
    ),
  repassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm = ({ states, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      name: "",
      surname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      password: "",
      repassword: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log("submit");
      setSubmitted(true);
      onSubmit(values);
    },
  });

  useEffect(() => {
    console.log({ formik });
  });

  return (
    <form
      className="login-form register-form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputusername">Username</label>
          <input
            name="username"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.username,
            })}
            id="inputusername"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {((formik.errors.username && formik.touched.username) ||
            submitted) && (
            <div className="invalid-feedback">{formik.errors.username}</div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail">Email</label>
          <input
            name="email"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.email,
            })}
            id="inputEmail"
            placeholder="example@gmail.com"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {((formik.errors.email && formik.touched.email) || submitted) && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputName">Name</label>
          <input
            name="name"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.name,
            })}
            id="inputName"
            required
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {((formik.errors.name && formik.touched.name) || submitted) && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputSurname">Surname</label>
          <input
            name="surname"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.surname,
            })}
            id="inputSurname"
            required
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
          {((formik.errors.surname && formik.touched.surname) || submitted) && (
            <div className="invalid-feedback">{formik.errors.surname}</div>
          )}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          name="address"
          type="text"
          className={classnames({
            "form-control": true,
            "is-invalid": formik.errors.address,
          })}
          id="inputAddress"
          placeholder="1234 Main St"
          required
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {((formik.errors.address && formik.touched.address) || submitted) && (
          <div className="invalid-feedback">{formik.errors.address}</div>
        )}
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input
            name="city"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.city,
            })}
            id="inputCity"
            required
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          {((formik.errors.city && formik.touched.city) || submitted) && (
            <div className="invalid-feedback">{formik.errors.city}</div>
          )}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select
            name="state"
            id="inputState"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.state,
            })}
            required
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            <option value={null}>Choose...</option>
            {states.map((state, index) => (
              <option value={state} key={index}>
                {state}
              </option>
            ))}
          </select>
          {((formik.errors.state && formik.touched.state) || submitted) && (
            <div className="invalid-feedback">{formik.errors.state}</div>
          )}
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input
            name="zip"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.zip,
            })}
            id="inputZip"
            placeholder="41000"
            required
            maxLength="5"
            value={formik.values.zip}
            onChange={formik.handleChange}
          />
          {((formik.errors.zip && formik.touched.zip) || submitted) && (
            <div className="invalid-feedback">{formik.errors.zip}</div>
          )}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            name="password"
            type="password"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.password,
            })}
            id="inputPassword4"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {((formik.errors.password && formik.touched.password) ||
            submitted) && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputRepassword">Re-password</label>
          <input
            name="repassword"
            type="password"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.repassword,
            })}
            id="inputRepassword"
            required
            value={formik.values.repassword}
            onChange={formik.handleChange}
          />
          {((formik.errors.repassword && formik.touched.repassword) ||
            submitted) && (
            <div className="invalid-feedback">{formik.errors.repassword}</div>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-form">
        Registrarse
      </button>
    </form>
  );
};

export default React.memo(RegisterForm);

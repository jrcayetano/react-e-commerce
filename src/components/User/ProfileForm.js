import React, { useEffect, useState } from "react";
import {
  VALID_ZIP_PATTERN,
  VALID_EMAIL_PATTERN,
  VALID_PASSWORD_PATTERN,
} from "./../../consts/patterns";
import classnames from "classnames";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

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

const ProfileForm = ({ states, profile, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: profile.username || "",
      email: profile.email || "",
      name: profile.name || "",
      surname: profile.surname || "",
      address: profile.address || "",
      city: profile.city || "",
      state: profile.state || "",
      zip: profile.zip || "",
      password: profile.repassword || "",
      repassword: profile.repassword || "",
    },
    validationSchema,
    onSubmit(values) {
      setSubmitted(true);
      onSubmit(values);
    },
  });

  return (
    <form
      className="login-form register-form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputusername">Usuario</label>
          <input
            name="username"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.username && formik.touched.username,
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
              "is-invalid": formik.errors.email && formik.touched.email,
            })}
            id="inputEmail"
            placeholder="example@gmail.com"
            required
            disabled
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
          <label htmlFor="inputName">Nombre</label>
          <input
            name="name"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.name && formik.touched.name,
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
          <label htmlFor="inputSurname">Apellidos</label>
          <input
            name="surname"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.surname && formik.touched.surname,
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
        <label htmlFor="inputAddress">Dirección</label>
        <input
          name="address"
          type="text"
          className={classnames({
            "form-control": true,
            "is-invalid": formik.errors.address && formik.touched.address,
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
          <label htmlFor="inputCity">Ciudad</label>
          <input
            name="city"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.city && formik.touched.city,
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
          <label htmlFor="inputState">Provincia</label>
          <select
            name="state"
            id="inputState"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.state && formik.touched.state,
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
          <label htmlFor="inputZip">CP</label>
          <input
            name="zip"
            type="text"
            className={classnames({
              "form-control": true,
              "is-invalid": formik.errors.zip && formik.touched.zip,
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
      <button type="submit" className="btn btn-primary btn-form">
        Realizar cambios
      </button>
    </form>
  );
};

ProfileForm.propTypes = {
  states: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(ProfileForm);

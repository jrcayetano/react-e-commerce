import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import { connect } from "react-redux";
import { clearToast, showToast } from "./../../state/actions/AppActions";
import { useDispatch } from "react-redux";
import classnames from "classnames";

const ToastEcommerce = ({ title, message, show, isError }) => {
  const dispatch = useDispatch();
  console.log(show);
  return (
    <div
      className={classnames({ "bg-success": !isError, "bg-danger": isError })}
    >
      <Toast
        delay={5000}
        autohide
        show={show}
        onClose={() => {
          dispatch(clearToast());
          dispatch(showToast(false));
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default React.memo(ToastEcommerce);

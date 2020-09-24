import React from "react";
import { connect } from "react-redux";
import ToastEcommerce from "./Toast";
const ToastWrapper = ({ toasts, show }) => {
  return (
    <div className="toast-wrapper">
      <div className="toast-wrapper__container">
        {toasts.map((toast, index) => (
          <ToastEcommerce
            key={`toast_${index}`}
            title={toast.title}
            message={toast.message}
            show={show}
            isError={toast.isError}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  toasts: state.app.toasts,
  show: state.app.showToast,
});

export default connect(mapStateToProps)(React.memo(ToastWrapper));

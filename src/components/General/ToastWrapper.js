import React from "react";
import { connect } from "react-redux";
import ToastEcommerce from "./Toast";
const ToastWrapper = ({ toastMessages, show }) => {
  return (
    <div className="toast-wrapper">
      <div className="toast-wrapper__container">
        {toastMessages.map((toast, index) => (
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
  toastMessages: state.app.toastMessages,
  show: state.app.showToast,
});

export default connect(mapStateToProps)(React.memo(ToastWrapper));

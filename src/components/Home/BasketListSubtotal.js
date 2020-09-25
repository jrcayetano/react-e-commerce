import React from "react";
import PropTypes from "prop-types";
const BasketListSubtotal = ({ subtotal, onBuy }) => {
  return (
    <div className="basket-list__total">
      <span className="basket-list__total__price">
        Subtotal:
        <span className="quantity">EUR {subtotal} €</span>
      </span>
      <button
        className="btn btn-warning"
        disabled={subtotal === 0 ? true : false}
        onClick={onBuy}
      >
        Tramitar pedido
      </button>
    </div>
  );
};

BasketListSubtotal.propTypes = {
  subtotal: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
};

BasketListSubtotal.defaultProps = {
  subtotal: 0,
};

export default React.memo(BasketListSubtotal);

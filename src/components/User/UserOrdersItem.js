import React from "react";
import UserOrderProduct from "./UserOrderProduct";
import PropTypes from "prop-types";

const UserOrderItem = ({ order }) => {
  return (
    <div className="border rounded order-item">
      <div className="order-item__header">
        <div className="order-item__Header--left">
          <div className="order-item__header__date">
            <div className="order-item__header__date__title">
              Pedido realizado
            </div>
            <div className="order-item__header__date__value">{order.date}</div>
          </div>
          <div className="order-item__header__total">
            <div className="order-item__header__total__title">Total</div>
            <div className="order-item__header__total__value">
              EUR {order.total}
            </div>
          </div>
          <div className="order-item__header__receiver">
            <div className="order-item__header__receiver__title">Enviar a</div>
            <div className="order-item__header__receiver__value">
              {order.receiver}
            </div>
          </div>
        </div>
        <div className="order-item__Header--right">
          <div className="order-item__header__receiver__order-number">
            <span>Pedido Nº</span> {order.number}
          </div>
        </div>
      </div>
      <div className="order-item__body">
        <div className="order-item__body__delivery">
          <div className="order-item__body__delivery__status">
            {order?.delivery?.status}
          </div>
          <div className="order-item__body__delivery__info">
            {order?.delivery?.info}
          </div>
        </div>
        <div className="order-item__body__product-list">
          {order?.products.map((product, index) => (
            <UserOrderProduct product={product} key={`product_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

UserOrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default React.memo(UserOrderItem);

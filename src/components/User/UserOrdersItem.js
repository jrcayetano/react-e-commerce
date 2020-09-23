import React from "react";
import UserOrderProduct from "./UserOrderProduct";

const UserOrderItem = ({ order }) => {
  return (
    <div class="border rounded order-item">
      <div class="order-item__header">
        <div class="order-item__Header--left">
          <div class="order-item__header__date">
            <div class="order-item__header__date__title">Pedido realizado</div>
            <div class="order-item__header__date__value">{order.date}</div>
          </div>
          <div class="order-item__header__total">
            <div class="order-item__header__total__title">Total</div>
            <div class="order-item__header__total__value">
              EUR {order.total}
            </div>
          </div>
          <div class="order-item__header__receiver">
            <div class="order-item__header__receiver__title">Enviar a</div>
            <div class="order-item__header__receiver__value">
              {order.receiver}
            </div>
          </div>
        </div>
        <div class="order-item__Header--right">
          <div class="order-item__header__receiver__order-number">
            <span>Pedido Nº</span> {order.number}
          </div>
        </div>
      </div>
      <div class="order-item__body">
        <div class="order-item__body__delivery">
          <div class="order-item__body__delivery__status">
            {order?.delivery?.status}
          </div>
          <div class="order-item__body__delivery__info">
            {order?.delivery?.info}
          </div>
        </div>
        <div class="order-item__body__product-list">
          {/*FALTA componente user order product*/}
          {order?.products.map((product, index) => (
            <UserOrderProduct product={product} key={`product_${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserOrderItem);

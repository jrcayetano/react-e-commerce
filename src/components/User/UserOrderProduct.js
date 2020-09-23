import React from "react";

const UserOrderProduct = ({ product }) => {
  return (
    <div className="order-item__body__product">
      <div className="order-item__body__product__image">
        <img className="img-fluid" src={product?.image} />
      </div>
      <div className="order-item__body__product__info">
        <div className="order-item__body__product__description">
          <a href="#">{product.description}</a>
        </div>
        <div className="order-item__body__product__seller">
          Venido por {product?.seller?.name}
        </div>
        <div className="order-item__body__product__refund">
          Devolución elegible hasta {product.delivery}
        </div>
        <div className="order-item__body__product__price">
          EUR {product.price}
        </div>
      </div>
    </div>
  );
};

export default UserOrderProduct;

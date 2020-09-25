import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "./../../consts/paths";

const UserOrderProduct = ({ product }) => {
  return (
    <div className="order-item__body__product">
      <div className="order-item__body__product__image">
        <img className="img-fluid" src={product?.image} alt="product" />
      </div>
      <div className="order-item__body__product__info">
        <div className="order-item__body__product__description">
          <Link to={`/${PRODUCTS_PATH}/${product.id}`}>{product.name}</Link>
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

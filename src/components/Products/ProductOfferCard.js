import React from "react";
import { PRODUCTS_PATH } from "./../../consts/paths";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const ProductOfferCard = ({ product, onAddToBasket }) => {
  return (
    <div className="product-card-offers">
      <Link to={`/${PRODUCTS_PATH}/${product.id}`}>
        <div className="product-card-offers__image">
          <img
            src={product.src || product.image}
            className="img-fluid d-block"
            alt="product"
          />
        </div>
      </Link>
      <div className="product-card-offers__info">
        <div className="product-card-offers__badge">
          <span className="badge badge-light bg-offer">OFERTA DEL DIA</span>
        </div>
        <span className="product-card-offers__info__price">
          <span>{product.priceOffer}&nbsp;€</span>
          <span className="product-card-offers__info__price-offer">
            <span className="stroke">Precio: {product.price}&nbsp;€ </span>(-
            {product.discount}%)
          </span>
        </span>
        <span className="product-card-offers__info__timer">
          {" "}
          Quedan 10 min{" "}
        </span>
        <span className="product-card-offers__info__title">
          <Link to={`/${PRODUCTS_PATH}/${product.id}`}>{product.name}</Link>
        </span>
        <span className="product-card-offers__info__seller">
          vendido y enviado por {product.seller.name}
        </span>

        <span className="product-card-offers__info__rating">
          <Rating rating={product?.rating} />
          <span>{product?.reviews.length}</span>
        </span>
      </div>
      <button
        className="btn btn-warning btn-block"
        type="button"
        onClick={() => onAddToBasket(product)}
      >
        Añadir a al cesta
      </button>
    </div>
  );
};

export default React.memo(ProductOfferCard);

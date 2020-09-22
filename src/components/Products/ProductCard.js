import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "./../../consts/paths";
import classnames from "classnames";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/${PRODUCTS_PATH}/${product.id}`}>
        <div className="product-card__badge">
          <span
            className={classnames({
              badge: true,
              "badge-light": true,
              "bg-warning": true,
              invisible: !product.mostseller,
            })}
          >
            Más vendidos
          </span>
        </div>
        <div className="product-card__image">
          <img
            src={product.src || product.image}
            className="img-fluid d-block"
          />
        </div>
        <div className="product-card__info">
          <span className="product-card__info__title">{product.name}</span>
          <span className="product-card__info__description">
            {product.description}
          </span>
          <span className="product-card__info__rating">
            <Rating rating={product?.rating} />
            <span>{product?.reviews.length}</span>
          </span>
          <span className="product-card__info__price">
            {product.price}&nbsp;€
          </span>
          <span className="product-card__info__delivery">
            Recíbelo el <strong>{product.delivery}</strong>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

/*

<div class="product-card">
  <a [routerLink]="[product.id]">
    <div class="product-card__badge">
      <!-- <span class="badge bg-warning">Más vendido</span> -->
      <span class="badge badge-light bg-warning" [hidden]="!product?.mostseller"
        >Más vendidos</span
      >
    </div>
    <div class="product-card__image">
      <img [src]="product.src || product.image" class="img-fluid d-block" />
    </div>
    <div class="product-card__info">
      <span class="product-card__info__title">{{ product.name }}</span>
      <span class="product-card__info__description">{{
        product.description
      }}</span>
      <span class="product-card__info__rating">
        <app-rating-star [rating]="product?.rating"></app-rating-star>
        <span>{{ product?.reviews.length }}</span>
      </span>
      <span class="product-card__info__price">{{ product.price }}&nbsp;€</span>
      <span class="product-card__info__delivery"
        >Recíbelo el <strong>{{ product.delivery }}</strong></span
      >
    </div>
  </a>
</div>


*/

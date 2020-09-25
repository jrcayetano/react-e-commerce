import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "./../../consts/paths";
import classnames from "classnames";
import Rating from "./Rating";
import PropTypes from "prop-types";

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
            alt="product"
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

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(ProductCard);

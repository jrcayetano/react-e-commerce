import React from "react";
import Rating from "./Rating";

const ProductDetailInformation = ({ product }) => {
  return (
    <div className="product-detail-information">
      <div className="product-detail-information__image">
        <img className="img-fluid" src={product?.image} />
      </div>
      <div className="product-detail-information__data">
        <div className="product-detail-information____data__name">
          {product?.name}
        </div>
        <div className="product-detail-information__data__rating">
          <span className="product-detail-information__data__rating__stars">
            <Rating rating={product?.rating} />
          </span>
          <span> {product?.reviews?.length}</span>
        </div>
        <div className="product-detail-information__extra-info">
          <ul>
            {product?.extraInformation.map((info, index) => (
              <li key={`info_${index}`}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetailInformation);

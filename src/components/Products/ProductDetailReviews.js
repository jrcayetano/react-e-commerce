import React from "react";
import Rating from "./Rating";

const ProductDetailReview = ({ review }) => {
  const imagePath = process.env.PUBLIC_URL + "/assets/";
  return (
    <div className="product-detail-review">
      <div className="product-detail-review__user-information">
        <img
          className="product-detail-review__user-information__image"
          src={`${imagePath}/${review?.user?.image}`}
          alt="user"
        />
        <span className="product-detail-review__user-information__name">
          {review?.user?.name}
        </span>
      </div>
      <div className="product-detail-review__rating">
        <div className="product-detail-review__rating__title">
          <span className="rating-star">
            <Rating rating={review?.rating} />
          </span>
          <span>{review?.title}</span>
        </div>
        <div className="product-detail-review__rating__date">
          <span>Revisado en España el {review?.date}</span>
        </div>
        <div className="product-detail-review__rating__description">
          {review?.description}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetailReview);

import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteProduct,
  IncremenProductQuantity,
} from "./../../state/actions/BasketActions";
import PropTypes from "prop-types";

const BasketListProducts = ({ product }) => {
  const dispatch = useDispatch();
  const quantitiesOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleOndDeleteClick = () => {
    dispatch(DeleteProduct(product.id));
  };

  const handletChangeQuantity = (quantity) => {
    dispatch(
      IncremenProductQuantity({
        productId: product.id,
        quantity: parseInt(quantity),
      })
    );
  };

  return (
    <>
      <div className="basket-list__products__item">
        <div className="basket-list__products__image">
          <img src={product.image} alt="product_Image" />
        </div>
        <div className="basket-list__products__info">
          <div className="basket-list__products__info__name">
            {product.name}
          </div>
          <div className="basket-list__products__info__price">
            EUR {product.isOffer ? product.priceOffer : product.price}
          </div>
        </div>
      </div>

      <div className="basket-list__products__actions">
        <form className="basket-list__products__actions__quantity">
          <label className="" htmlFor="quantityInput">
            Cant:{" "}
          </label>
          <select
            className=""
            id="quantityInput"
            value={product.quantity}
            onChange={(event) => {
              handletChangeQuantity(event.target.value);
            }}
          >
            {quantitiesOptions.map((quantity, index) => (
              <option value={quantity} key={`product_${index}`}>
                {quantity}
              </option>
            ))}
          </select>
        </form>
        <button className="btn btn-light" onClick={handleOndDeleteClick}>
          Eliminar
        </button>
      </div>
    </>
  );
};

BasketListProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(BasketListProducts);

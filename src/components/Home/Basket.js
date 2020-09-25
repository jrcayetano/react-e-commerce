import React from "react";
import { connect, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { BasketToggle } from "./../../state/actions/BasketActions";

const Basket = ({ productList }) => {
  const dispatch = useDispatch();
  const handleBasketClick = () => {
    dispatch(BasketToggle());
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-light"
        onClick={handleBasketClick}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-light">{productList.length}</span>
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  productList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Basket));

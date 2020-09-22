import React from "react";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Basket = ({ productList }) => {
  const handleBasketClick = () => {};

  return (
    <>
      <button type="button" class="btn btn-light" onClick={handleBasketClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span class="badge badge-light">{productList.length}</span>
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  productList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Basket));
{
  /* <button type="button" class="btn btn-light" (click)="onBasketClick()">
  <fa-icon [icon]="faShoppingCart"></fa-icon>
  <span class="badge badge-light">{{ (productList$ | async).length }}</span>
</button> */
}

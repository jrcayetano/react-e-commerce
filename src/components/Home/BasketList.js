import React, { useEffect, useState } from "react";
import BasketListSubtotal from "./BasketListSubtotal";
import { connect } from "react-redux";
import BasketListProducts from "./BasketListProducts";

const BasketList = ({ basketList }) => {
  const calculateSubtotal = () => {
    const total = basketList
      .map((product) =>
        product.isOffer
          ? product.priceOffer * product.quantity
          : product.price * product.quantity
      )
      .reduce((product1, product2) => product1 + product2, 0);
    setSubtotal(total);
  };

  const handleBuy = () => {
    console.log("buy");
  };

  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    calculateSubtotal();
  }, [basketList]);

  return (
    <div className="basket-list">
      <BasketListSubtotal subtotal={subtotal} onBuy={handleBuy} />
      <div className="basket-list__products">
        {basketList.map((product, index) => (
          <BasketListProducts product={product} key={`Product${index}`} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(BasketList));

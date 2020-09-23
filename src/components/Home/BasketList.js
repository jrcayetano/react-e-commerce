import React, { useEffect, useState } from "react";
import BasketListSubtotal from "./BasketListSubtotal";
import { connect, useDispatch } from "react-redux";
import BasketListProducts from "./BasketListProducts";
import { createOrder, generateOrder } from "./../../services/Orders.service";
import { ClearBasket } from "./../../state/actions/BasketActions";
const BasketList = ({ basketList, isUserLogged, userLoggedData }) => {
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

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
    if (!isUserLogged) {
      // TODO: Falta toast
      return;
    }
    const order = generateOrder(basketList, subtotal, userLoggedData);
    createOrder(order).then((response) => {
      if (response && response.data) {
        dispatch(ClearBasket());
      }
    });
    console.log("buy");
  };

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
  isUserLogged: state.userLogged.isLogged,
  userLoggedData: state.userLogged.profile,
});

export default connect(mapStateToProps)(React.memo(BasketList));

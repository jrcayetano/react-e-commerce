import React, { useEffect, useState } from "react";
import BasketListSubtotal from "./BasketListSubtotal";
import { connect, useDispatch } from "react-redux";
import BasketListProducts from "./BasketListProducts";
import { createOrder, generateOrder } from "./../../services/Orders.service";
import { ClearBasket } from "./../../state/actions/BasketActions";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";
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
      toast("Debe iniciar sesión para realizar la compra", true);
      return;
    }
    const order = generateOrder(basketList, subtotal, userLoggedData);
    createOrder(order)
      .then((response) => {
        if (response && response.data) {
          toast("Compra realizada correctamente");
          dispatch(ClearBasket());
        }
      })
      .catch((error) => toast(error.response.data, true));
  };

  useEffect(() => {
    calculateSubtotal();
  }, [basketList]);

  const toast = (message, isError = false) => {
    const toast = generateToast(message, isError);
    dispatch(setToast(toast));
    dispatch(showToast(true));
  };

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

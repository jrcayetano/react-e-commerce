import React from "react";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Products from "./../Products";
import BasketList from "./BasketList";
import { connect } from "react-redux";
import ProductDetail from "./../Products/ProductDetail";
import UserOrders from "./../User/UserOrders";
import UserFavoriteProduct from "./../User/UserFavoriteProduct";
import Login from "./../Sign/Login";
import Register from "./../Sign/Register";
import Profile from "./../User/Profile";
import ToastEcommerce from "./../General/Toast";

import { useDispatch } from "react-redux";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";
import ToastWrapper from "../General/ToastWrapper";

const Home = ({ isBasketOpened }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* <button
        onClick={() => {
          const toast = generateToast(
            "El usuario se ha actualizado correctamente",
            true
          );
          dispatch(setToast(toast));
          dispatch(showToast(true));
        }}
      ></button> */}
      <ToastWrapper />
      <Header />
      <div className="home">
        <main
          className={classNames({
            "main-content": true,
            "basket-opened": isBasketOpened,
          })}
        >
          <Route exact path="/products" component={Products} />
          <Route exact path="/offers" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/offers/:id" component={ProductDetail} />
          <Route path="/user/orders" component={UserOrders} />
          <Route path="/user/favorite" component={UserFavoriteProduct} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user/edit-profile" component={Profile} />
          {isBasketOpened && <BasketList />}
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isBasketOpened: state.basket.opened,
});

export default connect(mapStateToProps)(React.memo(Home));

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
import ToastWrapper from "../General/ToastWrapper";
import ProtectedRoute from "../General/ProtectedRoute";

const Home = ({ isBasketOpened, isLogged }) => {
  return (
    <React.Fragment>
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
          <ProtectedRoute
            path="/user/orders"
            isLogged={isLogged}
            component={UserOrders}
          />
          <ProtectedRoute
            path="/user/favorite"
            isLogged={isLogged}
            component={UserFavoriteProduct}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute
            path="/user/edit-profile"
            isLogged={isLogged}
            component={Profile}
          />
          {isBasketOpened && <BasketList />}
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isBasketOpened: state.basket.opened,
  isLogged: state.userLogged.isLogged,
});

export default connect(mapStateToProps)(React.memo(Home));

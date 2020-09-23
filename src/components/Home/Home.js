import React from "react";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Products from "./../Products";
import BasketList from "./BasketList";
import { connect, useDispatch } from "react-redux";

const Home = ({ isBasketOpened }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <main
          className={classNames({
            "main-content": true,
            "basket-opened": isBasketOpened,
          })}
        >
          <Route path="/products" component={Products} />
          <Route path="/offers" component={Products} />
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

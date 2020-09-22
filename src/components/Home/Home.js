import React from "react";
import classNames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Products from "./../Products";

const Home = () => {
  const isBasketOpened = false;
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
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Home);

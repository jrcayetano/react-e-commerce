import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductOfferCard from "./ProductOfferCard";
import ProductFilter from "./ProductFilter";
import { getProductList } from "./../../services/Product.service";
import { MenuEnum } from "./../../consts/MenuEnum";
import { connect, useDispatch } from "react-redux";
import {
  AddProduct,
  IncremenProductQuantity,
} from "./../../state/actions/BasketActions";

const Products = ({ isOffer, basketProductsList }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const handleFilterChange = (filter) => {
    getProductList(filter, isOffer).then((response) =>
      setProducts(response.data)
    );
  };

  const handleAddToBasket = (product) => {
    const foundProduct = foundProductInBasket(product);
    if (foundProduct) {
      dispatch(
        IncremenProductQuantity({
          productId: product.id,
          quantity: foundProduct.quantity + 1,
        })
      );
    } else {
      dispatch(AddProduct(product));
    }
  };

  const foundProductInBasket = (product) => {
    return basketProductsList.find((prod) => prod.id === product.id);
  };

  return (
    <>
      <div className="products">
        <div className="banner">
          <img
            className="img-fluid"
            src="https://images-eu.ssl-images-amazon.com/images/G/30/gaming2020/trafficdrivers/ILM/ILM_650_x_45._CB428851601_.jpg"
          />
        </div>
        <div className="products-main">
          <ProductFilter onFilterChange={handleFilterChange} />
          <div className="products">
            <div className="products__list">
              {!isOffer &&
                products.map((product, index) => (
                  <ProductCard product={product} key={`product_${index}`} />
                ))}
              {isOffer &&
                products.map((product, index) => (
                  <ProductOfferCard
                    product={product}
                    onAddToBasket={handleAddToBasket}
                    key={`product_${index}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isOffer: state.app.selectedMenu === MenuEnum.Offers ? true : false,
  basketProductsList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(Products));

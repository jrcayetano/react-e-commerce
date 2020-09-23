import React, { useEffect, useState } from "react";
import http from "axios";
import { SERVER_URL, API_PRODUCTS } from "./../../consts/api";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { getProductList } from "./../../services/Product.service";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleFilterChange = (filter) => {
    console.log(filter);
    getProductList(filter, false).then((response) =>
      setProducts(response.data)
    );
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
              {products.map((product, index) => (
                <ProductCard
                  product={product}
                  key={`product_${index}`}
                  className="test"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Products);

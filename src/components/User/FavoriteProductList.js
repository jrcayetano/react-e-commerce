import React from "react";
import FavoriteProduct from "./FavoriteProduct";

const FavoriteProductList = ({ productList }) => {
  return (
    <div className="favorite-list border p-3">
      <div className="favorite-list__groups">
        <div className="favorite-list__groups__element selected bg-light">
          <div className="favorite-list__groups__element__name">
            Favoritos 1
          </div>
          <div className="favorite-list__groups__element__scope">privada</div>
        </div>
        <div className="favorite-list__groups__element bg-light">
          <div className="favorite-list__groups__element__name">
            Favoritos 2
          </div>
          <div className="favorite-list__groups__element__scope">pública</div>
        </div>
      </div>
      <div className="favorite-list__table">
        <div className="favorite-list__table__header">
          <nav className="navbar navbar-light">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </nav>
        </div>
        <div className="favorite-list__table__body">
          {productList.map((product, index) => (
            <FavoriteProduct product={product} key={index} />
          ))}
          {/** TODO FAVORITE PRODUCT en ng for pasando product de productlist */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FavoriteProductList);

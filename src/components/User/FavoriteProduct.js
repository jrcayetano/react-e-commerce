import React, { useEffect } from "react";
import { HOME_PATH, PRODUCTS_PATH } from "./../../consts/paths";
import { Link } from "react-router-dom";
import { AddProduct } from "./../../state/actions/BasketActions";
import { DeleteFavoriteProduct } from "./../../state/actions/UserLoggedActions";
import { useDispatch } from "react-redux";
const FavoriteProduct = ({ product }) => {
  const dispatch = useDispatch();
  const productPath = `${HOME_PATH}/${PRODUCTS_PATH}/${product.id}`;

  useEffect(() => {}, [product]);

  const handleAddToBasket = () => {
    dispatch(AddProduct(product));
  };

  const handleDelete = () => {
    dispatch(DeleteFavoriteProduct(product.id));
  };

  return (
    <div className="favorite-product">
      <div className="favorite-product__info">
        <div className="favorite-product__info__image">
          <img src={product?.image} alt="favorite product" />
          <div className="favorite-product__actions__date d-block d-sm-none">
            Articulo añadido {product?.addedDate}
          </div>
        </div>
        <div className="favorite-product__info__details">
          <div className="favorite-product__info__details__name">
            <Link to={productPath}>{product?.name}</Link>
          </div>
          <div className="favorite-product__info__details__rating">
            Valoraciones <span className="value">{product?.rating}</span>
          </div>
          <div className="favorite-product__info__details__price">
            {product?.price} €
          </div>
        </div>
      </div>
      <div className="favorite-product__actions">
        <div className="favorite-product__actions__date d-none d-sm-block">
          Articulo añadido {product?.addedDate}
        </div>
        <div className="favorite-product__actions__buttons">
          <button
            type="button"
            onClick={handleAddToBasket}
            className="btn btn-warning btn-sm"
          >
            Añadir a la cesta
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FavoriteProduct);

import React, { useState, useEffect } from "react";
import ProductDetailInformation from "./ProductDetailInformation";
import ProductDetailReview from "./ProductDetailReviews";
import { useParams } from "react-router-dom";
import { getById } from "./../../services/Product.service";
import {
  AddProduct,
  IncremenProductQuantity,
} from "./../../state/actions/BasketActions";
import { AddFavoriteProduct } from "./../../state/actions/UserLoggedActions";
import { connect, useDispatch } from "react-redux";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";

const ProductDetail = ({ basketProductsList }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState();

  const foundProductInBasket = (product) => {
    return basketProductsList.find((prod) => prod.id === product.id);
  };

  useEffect(() => {
    getById(id).then((response) => setProduct(response.data));
  }, []);

  const handleAddToBasket = () => {
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

  const haddleAddToFavorite = () => {
    toast("Producto agregado a favoritos");
    dispatch(AddFavoriteProduct(product));
  };

  const toast = (message, isError = false) => {
    const toast = generateToast(message, isError);
    dispatch(setToast(toast));
    dispatch(showToast(true));
  };

  return (
    <div className="container product-detail-wrapper">
      <div className="row">
        <div className="col w-100">
          <h3 className="login-form__title title-page">Detalle del producto</h3>
          <div className="detail-section">
            <ProductDetailInformation product={product} />
            <div className="action-section">
              <div className="action-section__buy">
                <button
                  className="btn btn-warning btn-block"
                  onClick={handleAddToBasket}
                >
                  Añadir a al cesta
                </button>
              </div>
              <div className="action-section__whislist">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={haddleAddToFavorite}
                >
                  Añadir a favoritos
                </button>
              </div>
            </div>
          </div>
          <div className="detail-section__reviews">
            <h5>Principales reseñas de España</h5>
            {product?.reviews.map((review, index) => (
              <ProductDetailReview review={review} key={`review_${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProductsList: state.basket.productsList,
});

export default connect(mapStateToProps)(React.memo(ProductDetail));

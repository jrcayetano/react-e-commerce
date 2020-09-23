import React, { useEffect } from "react";
import FavoriteProductList from "./FavoriteProductList";
import { connect, useDispatch } from "react-redux";
import { getFavorites } from "./../../services/User.service";
import { AddFavoriteProductInBulk } from "./../../state/actions/UserLoggedActions";

const UserFavoriteProduct = ({ favoriteList }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFavorites().then((response) =>
      dispatch(AddFavoriteProductInBulk(response.data))
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col w-100 page-wrapper">
          <h3 className="title-page">Listado de productos favoritos</h3>
          <FavoriteProductList productList={favoriteList} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteList: state.userLogged.favoriteProducts,
});

export default connect(mapStateToProps)(React.memo(UserFavoriteProduct));

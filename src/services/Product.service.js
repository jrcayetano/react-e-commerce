import http from "axios";
import { SERVER_URL, API_PRODUCTS } from "./../consts/api";

const url = `${SERVER_URL}/${API_PRODUCTS}`;

export const getProductList = (filter, isOffer) => {
  if (filter) {
    const params = generateFilterSearch(filter, isOffer);
    return http.get(`${url}`, { params });
  } else {
    return http.get(`${url}`);
  }
};

export const getById = (productId) => {
  return http.get(`${url}/${productId}`);
};

const generateFilterSearch = (
  { searchTerm, rating = "1", min = "0", max, player, mouse, light, clock },
  isOffer = false
) => {
  const qS = searchTerm;

  let params = new URLSearchParams();
  const priceLabelParam = isOffer ? "priceOffer" : "price";

  if (searchTerm) {
    params.set("q", qS);
  }
  if (min) {
    params.set(`${priceLabelParam}_gte`, min);
  }
  if (rating) {
    params.set("rating_gte", rating);
  }
  if (max) {
    params.set(`${priceLabelParam}_lte`, max);
  }
  if (player || mouse || light || clock) {
    if (player) {
      params.has("category")
        ? params.append("category", "player")
        : params.set("category", "player");
    }
    if (mouse) {
      params.has("category")
        ? params.append("category", "mouse")
        : params.set("category", "mouse");
    }
    if (light) {
      params.has("category")
        ? params.append("category", "light")
        : params.set("category", "light");
    }
    if (clock) {
      params.has("category")
        ? params.append("category", "clock")
        : params.set("category", "clock");
    }
  }
  if (isOffer) {
    params.set("isOffer_ne", "false");
  } else {
    params.set("isOffer_ne", "true");
  }
  return params;
};

import http from "axios";
import {
  SERVER_URL,
  API_PROFILE,
  API_USER_ORDERS,
  API_FAVORITE_PRODUCTS,
} from "./../consts/api";

export const getProfile = () => {
  return this.http.get(`${SERVER_URL}/${API_PROFILE}`);
};

export const getOrders = () => {
  let params = new URLSearchParams();
  params.set("_sort", "id");
  params.set("_order", "desc");
  return http.get(`${SERVER_URL}/${API_USER_ORDERS}`, { params });
};

export const getFavorites = () => {
  return http.get(`${SERVER_URL}/${API_FAVORITE_PRODUCTS}`);
};

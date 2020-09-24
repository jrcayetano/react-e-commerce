import http from "axios";
import {
  SERVER_URL,
  API_PROFILE,
  API_USER_ORDERS,
  API_FAVORITE_PRODUCTS,
  API_USERS,
} from "./../consts/api";

export const getProfile = () => {
  return http.get(`${SERVER_URL}/${API_PROFILE}`);
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

export const updateProfile = (profile, userId, password) => {
  /* Para funcionar con json-auth-server es necesario el envío de la password e email
   * Por no que es necesario aplicar a password, el campo repassword que es el que contiene
   * la password en plano
   */
  profile["password"] = password;
  profile["repassword"] = password;
  return http.patch(`${SERVER_URL}/${API_USERS}/${userId}`, profile);
};

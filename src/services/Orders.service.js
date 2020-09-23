import http from "axios";

import { SERVER_URL, API_USER_ORDERS } from "./../consts/api";

export const createOrder = (order) => {
  return http.post(`${SERVER_URL}/${API_USER_ORDERS}`, order);
};

export const generateOrder = (product, totalBasket, userLoggedData) => {
  return {
    date: "hoy",
    total: totalBasket,
    receiver: userLoggedData.name,
    number: "xxx-yyyyyyy-zzzzzzz",
    refund: "8 onov 2020",
    delivery: {
      status: "En camino",
      info: "",
    },
    products: product,
  };
};

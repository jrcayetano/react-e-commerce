import http from "axios";
import { API_STATES, SERVER_URL } from "./../consts/api";

export const getStates = () => {
  return http.get(`${SERVER_URL}/${API_STATES}`);
};

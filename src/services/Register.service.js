import http from "axios";
import { SERVER_URL, API_REGISTER } from "./../consts/api";

export const register = (registerRequest) => {
  return http.post(`${SERVER_URL}/${API_REGISTER}`, registerRequest);
};

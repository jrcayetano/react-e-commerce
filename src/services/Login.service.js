import http from "axios";
import { SERVER_URL, API_LOGIN } from "./../consts/api";

const url = `${SERVER_URL}`;

export const login = ({ email, password }) => {
  return http.post(`${url}/${API_LOGIN}`, { email, password });
};

export const getUserByEmail = (email) => {
  return http.get(`${url}/users?email=${email}`);
};

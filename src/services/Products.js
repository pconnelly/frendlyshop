import axios from "axios";

export const getProducts = (category) => {
  let params = category ? {category} : {};
  return axios.post('https://frend.rest/case/products', params);
}

export const getProduct = (id) => axios.get(`https://frend.rest/case/products/${id}`);
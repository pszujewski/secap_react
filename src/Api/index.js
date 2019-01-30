import ApiFetcher from "./ApiFetcher";

const api = new ApiFetcher();

export const get = endpoint => {
  return api.call(endpoint, "GET");
};

export const post = (endpoint, body) => {
  return api.call(endpoint, "POST", body);
};

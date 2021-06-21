const END_POINT = "http://3.37.161.3:8080/";

const API = {
  get: (urlPath: string) => fetch(`${END_POINT}${urlPath}`),
  post: () => {},
};

export default API;

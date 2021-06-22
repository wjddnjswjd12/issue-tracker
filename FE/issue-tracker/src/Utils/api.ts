const END_POINT = "http://3.37.161.3:8080";

const API = {
  get: (urlPath: string) => fetch(`${END_POINT}${urlPath}`),

  post: (path: string, postData: object) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postData),
    }),
};

export default API;

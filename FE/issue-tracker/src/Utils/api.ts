const END_POINT = "http://3.37.161.3";

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

  put: (path: string, editData: object) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(editData),
    }),
};

export default API;

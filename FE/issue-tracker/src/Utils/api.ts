const END_POINT = "http://3.37.161.3";

const API = {
  withAuth: (path: string, postData: object, token: string) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postData),
    }),

  get: (urlPath: string, token: string) =>
    fetch(`${END_POINT}${urlPath}`, {
      headers: { Authorization: localStorage.getItem("token") as string },
    }),

  post: (path: string, postData: object, token: string) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(postData),
    }),

  put: (path: string, editData: object, token: string) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(editData),
    }),

  delete: (path: string, token: string) =>
    fetch(`${END_POINT}${path}`, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }),
};

export default API;

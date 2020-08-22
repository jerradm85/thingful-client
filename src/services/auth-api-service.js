import config from "../config";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // pass user_name and password values from our form to the post request body as json
      // { user_name: user_name.value, password: password.value }
      body: JSON.stringify(credentials),
    }).then((res) =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  },
};

export default AuthApiService;

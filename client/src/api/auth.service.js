import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    return api
      .post("/auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.data.accessToken) {
          console.log("rrrrr",response)
          TokenService.setUser(response.data.data);
        }

        return response.data.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(username, email, password) {
    return api.post("/auth/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}

export default new AuthService();

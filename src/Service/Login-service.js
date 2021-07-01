import http from "../http-common";
class LoginService {
  login(userObj) {
    console.log("userobj***********", userObj);
    return http.post("/login", userObj);
  }
}
export default new LoginService();

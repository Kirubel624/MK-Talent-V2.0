import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

let isreFrasing = false;


const setup = (store) => {
  instance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      console.log("token",token)
      if (token) {  
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;


instance.interceptors.response.use(
  (res) => {
    isreFrasing = false;
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    
    
    // console.log("auth",originalConfig.url)
    if (originalConfig.url !== "/auth/signin" && err.response) {
      // Access Token was expired
      
      if (err.response.status === 401 && !isreFrasing) {
        originalConfig._retry = true;
        isreFrasing = true;


        console.log("rs",TokenService.getLocalRefreshToken())
        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          

          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);
            isreFrasing = false
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }else{

      }
    }

    return Promise.reject(err);
  }
);
}
export default instance;
export {
  setup
}

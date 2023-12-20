import axios from 'axios';
import urlConfig from '../config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: urlConfig.baseURL,
    headers: {
      "Content-Type": "application/json",
      "app-type": "web",
      "device-id": "d12121",
    },
    validateStatus: (status) => {
      return status >= 200 && status < 500;
    },
  });

// instance.interceptors.response.use(async (response) => {
//   const originalRequest = response.config;
  
//   if (response.data?.message === "You are not authorized!") {
//     try {
//       const refreshToken = await AsyncStorage.getItem("refreshToken");
//       // console.log("[][][][][][]",refreshToken);   
//       const response = await instance.post(
//         "/auth/token",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         }
//       );

//       const accessToken = response.headers["auth-access-token"];
//       const newRefreshToken = response.headers["auth-refresh-token"];

//       await AsyncStorage.setItem("accessToken", accessToken);
//       await AsyncStorage.setItem("refreshToken", newRefreshToken);

//       // Retry the original request with the new token
//       originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//       return axios(originalRequest);

//     } catch (error) {
//       // console.log("oo");
//       await AsyncStorage.removeItem("accessToken");
//       await AsyncStorage.removeItem("refreshToken");
//     }
//   }

//   return response;
// });

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // console.log("error", error);
//   }
// );

export const addAuthHeader = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const deleteAuthHeader = async() => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  await AsyncStorage.removeItem("session_data");
  await AsyncStorage.removeItem("customerType");
  delete instance.defaults.headers.common.Authorization;
};

export default instance;

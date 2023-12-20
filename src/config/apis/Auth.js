import axios from 'axios';
import urlConfig from '../config.json';
import client from './client'

//  const instance = axios.create({
//     baseURL: urlConfig.baseURL ,
//     // headers: {
//     //     'Content-Type': 'multipart/form-data',
//     //     // Add any additional headers here if needed
//     // },
// });
// {{endpoint}}/api/register/customer

// const instance = axios.create({
//     baseURL: urlConfig.baseURL,
//     headers: {
//       "Content-Type": "application/json",
//       "app-type": "web",
//       "device-id": "d12121",
//     },
//     validateStatus: (status) => {
//       return status >= 200 && status < 500;
//     },
//   });
const loginCustomer = (body) => {
    return client.post('/auth/login/otp', body);
  };
const signUpCustomer = (body) => {
    return client.post('/auth/customer/signup', body);
  };

// {{endpoint}}/auth/validate
// const validateOtp = (body) => {
//     return axios.post(urlConfig.baseURL + '/auth/validate', body);
//   };


  export {
    loginCustomer,
    signUpCustomer
  };
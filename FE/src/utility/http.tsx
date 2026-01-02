import axios from 'axios';
import LocalStorageService from '../services/LocalStorageService';

//https://axios-http.com/docs/req_config

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/`,
  timeout: 5000,

  transformRequest: [
    function (data, headers) {
      /**
       * Do whatever you want to transform the data
       */
      headers['Content-Type'] = 'application/json';
      //headers["Accept"] = "application/json";
      const token = LocalStorageService.getAccessToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      return data;
    },
  ],

  transformResponse: [
    function (data) {
      /**
       * Do whatever you want to transform the data
       */
      return data;
    },
  ],

  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
});

instance.interceptors.request.use(
  function (config) {
    /**
     * works on request success
     */
    return config;
  },
  function (error) {
    /**
     * works on request error
     */
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    /*
     * Any status code that lie within the range of 2xx cause this function to trigger
     */
    /*
   console.log("--------instance.interceptors.response start-----------------");
    console.log(response.data);
     */
    response.data = JSON.parse(response.data);
    /*
    console.log(response);
    console.log("--------instance.interceptors.response end-----------------");
    */
    return response;
  },
  function (error) {
    /*
     * Any status codes that falls outside the range of 2xx cause this function to trigger
     */
    /*console.log("--------instance.interceptors.response start-----------------");
    console.log(error);
    console.log(error.response);
    console.log(error.response.data);
    */
    error.response.data = JSON.parse(error.response.data);
    /*
    console.log(error.response.data);
    console.log("--------instance.interceptors.response end-----------------");
    */
    return Promise.reject(error);
  }
);

export default instance;

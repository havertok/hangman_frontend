//Axios can intercept all our request and append jwt headers automatically
var axios = require('axios');

let jwtToken = localStorage.getItem('authorization');

axios.interceptors.request.use(
    function (config) {
        if (jwtToken) {
            //console.log('TOKEN: ' +jwtToken);
            config.headers['authorization'] = 'Bearer ' + jwtToken;
        }
        config.headers['Content-Type'] = 'application/json';
        //console.log(config);
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(function (response) {
    // 2** response codes trigger this
    return response;
  }, 
  function (error) {
    // 2** every other response code triggers there
    console.log('Axios interceptor recieved error! ' + error);
    return Promise.reject(error);
  }
);
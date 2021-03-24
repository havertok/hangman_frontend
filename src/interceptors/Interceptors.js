//Axios can intercept all our request and append jwt headers automatically
var axios = require('axios');

export const jwtToken = localStorage.getItem('authorization');

axios.interceptors.request.use(
    function (config) {
        if (jwtToken) {
            config.headers['authorization'] = 'Bearer:' + jwtToken;
            config.headers['Content-Type'] = 'application/json';
            config.headers['AAA_CustomHeader'] = 'InterceptorNotWorking';
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
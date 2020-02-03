const axios = require('axios');
const {weatherApi} = require('../../utils/config');

const options = {
    baseURL: 'https://api.openweathermap.org/data/2.5',
    method: 'get'
}
const getWeather = async (city) => {
    try {
        const response = await axios({
            ...options,
            url:'/weather',
            params: {
                q: city,
                appid: weatherApi
            }
        });
        // console.log(response.data)
        return response.data;
    }
    catch (error) {
        if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        console.log(error.request);
        } else {
      // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
        }
        console.log(error.config);
    }
}

const getForecast = async (city) => {
    try {
        const response = await axios({
            ...options,
            url:'/forecast',
            params: {
                q: city,
                appid: weatherApi
            }
        });
        return response.data.list;
    }
    catch (error) {
        if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        console.log(error.request);
        } else {
      // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
        }
        console.log(error.config);
    }
}

module.exports = {
    getWeather,
    getForecast
}
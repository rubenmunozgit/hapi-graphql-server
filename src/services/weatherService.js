const {getWeather, getForecast} = require('../datasource/apis/openweather');
const {transformCurrent,transformForecast} = require('../mutations/weather');
module.exports = class WeatherService {
    constructor() {}

    async getCurrentWeather(city) {
        const currentConditions = await getWeather(city).then(response => transformCurrent(response));
        return currentConditions;
    }

    async getForecastWeather(city) {
        const forecastConditions = await getForecast(city).then(response => transformForecast(response));
        return forecastConditions;
    }
}
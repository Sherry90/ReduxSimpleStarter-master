import axios from 'axios';

const API_KEY = '0e57db31ee5f7768ee8751bbfea8b235';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},kr`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
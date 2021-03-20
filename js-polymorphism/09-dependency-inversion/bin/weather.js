// @ts-check
/* eslint no-console: 0 */

import axios from 'axios';
import WeatherService from '../WeatherService.js';

// BEGIN (write your solution here)
const city = process.argv[2];
const service = new WeatherService (axios);
const weather = service.getWeather (city);
weather.then ((response)=> {
  const parsed = JSON.parse(response.data);
  console.log(`Temperature in ${city}: ${parsed.temperature}C`);
});
// END

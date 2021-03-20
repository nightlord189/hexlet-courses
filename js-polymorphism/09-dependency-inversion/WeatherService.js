// @ts-check

const apiUrl = 'http://localhost:8080/api/v2/';

// BEGIN (write your solution here)
export default class WeatherService {
  constructor (httpClient) {
    this.httpClient = httpClient;
  }
  
  async getWeather (city) {
    const url = `${apiUrl}cities/${city}`;
    return this.httpClient.get(url);
  }
}
// END

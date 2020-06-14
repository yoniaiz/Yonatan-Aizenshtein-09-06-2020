const BASE_URL = "https://dataservice.accuweather.com/";

export const api = {
  autocomplete: `${BASE_URL}locations/v1/cities/autocomplete`,
  currentConditions: `${BASE_URL}currentconditions/v1/`,
  forecasts: `${BASE_URL}forecasts/v1/daily/5day`,
  getAddressByCoords:`${BASE_URL}/locations/v1/cities/geoposition/search`,
  apiKey: `apikey=${process.env.REACT_APP_WEATHER_API_KEY}`,
};

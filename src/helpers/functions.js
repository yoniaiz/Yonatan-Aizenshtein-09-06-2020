function autocompleteAddressesParser(addresses) {
  const parsedAddresses = addresses.map((address) => ({
    country:
      address.Country && address.Country.LocalizedName
        ? address.Country.LocalizedName
        : "",
    address: address.LocalizedName,
    key: address.Key,
    id:
      address.AdministrativeArea && address.AdministrativeArea.ID
        ? address.AdministrativeArea.ID
        : "",
  }));

  return parsedAddresses;
}

const fToC = (f) => Math.round(((parseFloat(f) - 32) * 5) / 9);

function forecastParser(forecast) {
  const { Headline, DailyForecasts } = forecast;
  const parsedForecast = {};

  parsedForecast["headline"] = Headline.Text;
  parsedForecast["dailyForecast"] = DailyForecasts.map((day) => ({
    date: day.Date,
    maxTemp: {
      f: day.Temperature.Maximum.Value,
      c: fToC(day.Temperature.Maximum.Value),
    },
    minTemp: {
      f: day.Temperature.Minimum.Value,
      c: fToC(day.Temperature.Minimum.Value),
    },
    day: day.Day.IconPhrase,
    night: day.Night.IconPhrase,
  }));

  return parsedForecast;
}

function validObjectWithKeys(obj) {
  return obj && typeof obj === "object" && Object.keys(obj).length > 0;
}

const generateDynamicComponent = (
  height,
  width,
  left,
  bottom,
  zIndex,
  others = {}
) => ({
  height,
  width,
  left,
  bottom,
  zIndex,
  ...others,
});

function currentWeatherParser(weather, address) {
  if (Array.isArray(weather)) {
    const {
      WeatherText,
      IsDayTime,
      Temperature: { Imperial, Metric },
    } = weather[0];

    return {
      name: address.city || address.name,
      text: WeatherText,
      isDayTime: IsDayTime,
      key: address.value || address.key,
      value: address.value || address.key,
      celsius: Metric.Value,
      fahrenheit: Imperial.Value,
    };
  }
  return {};
}

function getDayOfTheWeek(date) {
  const dt = new Date(date);
  const day = dt.getDay();
  switch (day) {
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "Sun";
  }
}

function detectWeather(temp) {
  if (temp > 25) return "sun";
  else if (temp <= 25 && temp > 10) return "cloud";
  else if (temp <= 10 && temp > 0) return "rain";
  else return "snow";
}

export const helperFunctions = {
  autocompleteAddressesParser,
  forecastParser,
  validObjectWithKeys,
  generateDynamicComponent,
  getDayOfTheWeek,
  detectWeather,
  currentWeatherParser
};

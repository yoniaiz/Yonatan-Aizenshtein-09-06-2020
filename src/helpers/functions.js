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

const fToC = (f) => ((parseFloat(f) - 32) * 5) / 9;

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

export const helperFunctions = {
  autocompleteAddressesParser,
  forecastParser,
};

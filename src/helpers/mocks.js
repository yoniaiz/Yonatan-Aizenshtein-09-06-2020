const autocompleteRes = [
  {
    Version: 1,
    Key: "349727",
    Type: "City",
    Rank: 15,
    LocalizedName: "New York",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NY",
      LocalizedName: "New York",
    },
  },
  {
    Version: 1,
    Key: "710949",
    Type: "City",
    Rank: 85,
    LocalizedName: "New York",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "LIN",
      LocalizedName: "Lincolnshire",
    },
  },
  {
    Version: 1,
    Key: "2531279",
    Type: "City",
    Rank: 85,
    LocalizedName: "New York",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "NTY",
      LocalizedName: "North Tyneside",
    },
  },
  {
    Version: 1,
    Key: "338870",
    Type: "City",
    Rank: 85,
    LocalizedName: "New York Mills",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "MN",
      LocalizedName: "Minnesota",
    },
  },
  {
    Version: 1,
    Key: "2128074",
    Type: "City",
    Rank: 85,
    LocalizedName: "New York Mills",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NY",
      LocalizedName: "New York",
    },
  },
  {
    Version: 1,
    Key: "2126946",
    Type: "City",
    Rank: 285,
    LocalizedName: "New York Township",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "MO",
      LocalizedName: "Missouri",
    },
  },
  {
    Version: 1,
    Key: "2642589",
    Type: "City",
    Rank: 285,
    LocalizedName: "New York Precinct",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NE",
      LocalizedName: "Nebraska",
    },
  },
];

const fiveDayForecast = {
  Headline: {
    EffectiveDate: "2020-06-11T02:00:00-04:00",
    EffectiveEpochDate: 1591855200,
    Severity: 3,
    Text: "Showers and a thunderstorm late tonight through tomorrow afternoon",
    Category: "thunderstorm",
    EndDate: "2020-06-11T20:00:00-04:00",
    EndEpochDate: 1591920000,
    MobileLink:
      "http://m.accuweather.com/en/us/new-york-ny/10007/extended-weather-forecast/349727?lang=en-us",
    Link:
      "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2020-06-09T07:00:00-04:00",
      EpochDate: 1591700400,
      Temperature: {
        Minimum: {
          Value: 71.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 87.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?lang=en-us",
    },
    {
      Date: "2020-06-10T07:00:00-04:00",
      EpochDate: 1591786800,
      Temperature: {
        Minimum: {
          Value: 71.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 85.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 15,
        IconPhrase: "Thunderstorms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us",
    },
    {
      Date: "2020-06-11T07:00:00-04:00",
      EpochDate: 1591873200,
      Temperature: {
        Minimum: {
          Value: 67.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 81.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 16,
        IconPhrase: "Mostly cloudy w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Heavy",
      },
      Night: {
        Icon: 41,
        IconPhrase: "Partly cloudy w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us",
    },
    {
      Date: "2020-06-12T07:00:00-04:00",
      EpochDate: 1591959600,
      Temperature: {
        Minimum: {
          Value: 62.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 85.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us",
    },
    {
      Date: "2020-06-13T07:00:00-04:00",
      EpochDate: 1592046000,
      Temperature: {
        Minimum: {
          Value: 62.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 79.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us",
    },
  ],
};

const currentWeather = [
  {
    LocalObservationDateTime: "2020-06-10T12:23:00-04:00",
    EpochTime: 1591806180,
    WeatherText: "Sunny",
    WeatherIcon: 1,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 27.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 81.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/us/new-york-ny/10007/current-weather/349727?lang=en-us",
    Link:
      "http://www.accuweather.com/en/us/new-york-ny/10007/current-weather/349727?lang=en-us",
  },
];
export const mocks = {
  autocompleteRes,
  fiveDayForecast,
  currentWeather,
};

import { createSlice } from "@reduxjs/toolkit";
import { ChartType } from "../../components/assets/WeatherInterfaces/chartTypes";

const initialState: ChartType = {
  data: [
    {
      dt: 1658728800,
      main: {
        temp: 300.48,
        feels_like: 301.74,
        temp_min: 299.54,
        temp_max: 300.48,
        pressure: 958,
        sea_level: 958,
        grnd_level: 911,
        humidity: 61,
        temp_kf: 0.94,
      },

      clouds: {
        all: 40,
      },
    },
    {
      dt: 1658739600,
      main: {
        temp: 300.2,
        feels_like: 301.15,
        temp_min: 299.64,
        temp_max: 300.2,
        pressure: 975,
        sea_level: 975,
        grnd_level: 909,
        humidity: 58,
        temp_kf: 0.56,
      },

      clouds: {
        all: 60,
      },
    },
    {
      dt: 1658750400,
      main: {
        temp: 298.77,
        feels_like: 298.98,
        temp_min: 297.91,
        temp_max: 298.77,
        pressure: 991,
        sea_level: 991,
        grnd_level: 908,
        humidity: 61,
        temp_kf: 0.86,
      },

      clouds: {
        all: 80,
      },
    },
    {
      dt: 1658761200,
      main: {
        temp: 296.28,
        feels_like: 296.45,
        temp_min: 296.28,
        temp_max: 296.28,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 910,
        humidity: 69,
        temp_kf: 0,
      },

      clouds: {
        all: 98,
      },
    },
    {
      dt: 1658772000,
      main: {
        temp: 295.54,
        feels_like: 295.74,
        temp_min: 295.54,
        temp_max: 295.54,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 910,
        humidity: 73,
        temp_kf: 0,
      },

      clouds: {
        all: 98,
      },
    },
    {
      dt: 1658782800,
      main: {
        temp: 294.77,
        feels_like: 294.92,
        temp_min: 294.77,
        temp_max: 294.77,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 909,
        humidity: 74,
        temp_kf: 0,
      },

      clouds: {
        all: 97,
      },
    },
    {
      dt: 1658793600,
      main: {
        temp: 294,
        feels_like: 294.2,
        temp_min: 294,
        temp_max: 294,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 909,
        humidity: 79,
        temp_kf: 0,
      },

      clouds: {
        all: 99,
      },
    },
    {
      dt: 1658804400,
      main: {
        temp: 294.98,
        feels_like: 295.15,
        temp_min: 294.98,
        temp_max: 294.98,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 911,
        humidity: 74,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1658815200,
      main: {
        temp: 298.08,
        feels_like: 298.2,
        temp_min: 298.08,
        temp_max: 298.08,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 911,
        humidity: 60,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1658826000,
      main: {
        temp: 300.31,
        feels_like: 300.72,
        temp_min: 300.31,
        temp_max: 300.31,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 909,
        humidity: 50,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1658836800,
      main: {
        temp: 299.11,
        feels_like: 299.11,
        temp_min: 299.11,
        temp_max: 299.11,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 57,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1658847600,
      main: {
        temp: 297.31,
        feels_like: 297.48,
        temp_min: 297.31,
        temp_max: 297.31,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 909,
        humidity: 65,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1658858400,
      main: {
        temp: 295.99,
        feels_like: 296.26,
        temp_min: 295.99,
        temp_max: 295.99,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 910,
        humidity: 74,
        temp_kf: 0,
      },

      clouds: {
        all: 99,
      },
    },
    {
      dt: 1658869200,
      main: {
        temp: 295.05,
        feels_like: 295.36,
        temp_min: 295.05,
        temp_max: 295.05,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 908,
        humidity: 79,
        temp_kf: 0,
      },

      clouds: {
        all: 95,
      },
    },
    {
      dt: 1658880000,
      main: {
        temp: 294.12,
        feels_like: 294.39,
        temp_min: 294.12,
        temp_max: 294.12,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 908,
        humidity: 81,
        temp_kf: 0,
      },

      clouds: {
        all: 96,
      },
    },
    {
      dt: 1658890800,
      main: {
        temp: 295.44,
        feels_like: 295.68,
        temp_min: 295.44,
        temp_max: 295.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 910,
        humidity: 75,
        temp_kf: 0,
      },

      clouds: {
        all: 96,
      },
    },
    {
      dt: 1658901600,
      main: {
        temp: 299.44,
        feels_like: 299.44,
        temp_min: 299.44,
        temp_max: 299.44,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 910,
        humidity: 60,
        temp_kf: 0,
      },

      clouds: {
        all: 79,
      },
    },
    {
      dt: 1658912400,
      main: {
        temp: 299.69,
        feels_like: 299.69,
        temp_min: 299.69,
        temp_max: 299.69,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 59,
        temp_kf: 0,
      },

      clouds: {
        all: 89,
      },
    },
    {
      dt: 1658923200,
      main: {
        temp: 299.21,
        feels_like: 299.21,
        temp_min: 299.21,
        temp_max: 299.21,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 62,
        temp_kf: 0,
      },

      clouds: {
        all: 93,
      },
    },
    {
      dt: 1658934000,
      main: {
        temp: 296.75,
        feels_like: 297.12,
        temp_min: 296.75,
        temp_max: 296.75,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 909,
        humidity: 75,
        temp_kf: 0,
      },

      clouds: {
        all: 86,
      },
    },
    {
      dt: 1658944800,
      main: {
        temp: 296.48,
        feels_like: 296.8,
        temp_min: 296.48,
        temp_max: 296.48,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 910,
        humidity: 74,
        temp_kf: 0,
      },

      clouds: {
        all: 69,
      },
    },
    {
      dt: 1658955600,
      main: {
        temp: 295.67,
        feels_like: 296.01,
        temp_min: 295.67,
        temp_max: 295.67,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 908,
        humidity: 78,
        temp_kf: 0,
      },

      clouds: {
        all: 36,
      },
    },
    {
      dt: 1658966400,
      main: {
        temp: 295.17,
        feels_like: 295.54,
        temp_min: 295.17,
        temp_max: 295.17,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 908,
        humidity: 81,
        temp_kf: 0,
      },

      clouds: {
        all: 50,
      },
    },
    {
      dt: 1658977200,
      main: {
        temp: 297.34,
        feels_like: 297.67,
        temp_min: 297.34,
        temp_max: 297.34,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 910,
        humidity: 71,
        temp_kf: 0,
      },

      clouds: {
        all: 94,
      },
    },
    {
      dt: 1658988000,
      main: {
        temp: 300.52,
        feels_like: 301.54,
        temp_min: 300.52,
        temp_max: 300.52,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 910,
        humidity: 58,
        temp_kf: 0,
      },

      clouds: {
        all: 97,
      },
    },
    {
      dt: 1658998800,
      main: {
        temp: 301.29,
        feels_like: 302.15,
        temp_min: 301.29,
        temp_max: 301.29,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 54,
        temp_kf: 0,
      },

      clouds: {
        all: 100,
      },
    },
    {
      dt: 1659009600,
      main: {
        temp: 299.48,
        feels_like: 299.48,
        temp_min: 299.48,
        temp_max: 299.48,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 63,
        temp_kf: 0,
      },

      clouds: {
        all: 94,
      },
    },
    {
      dt: 1659020400,
      main: {
        temp: 297.87,
        feels_like: 298.23,
        temp_min: 297.87,
        temp_max: 297.87,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 909,
        humidity: 70,
        temp_kf: 0,
      },

      clouds: {
        all: 33,
      },
    },
    {
      dt: 1659031200,
      main: {
        temp: 297.06,
        feels_like: 297.41,
        temp_min: 297.06,
        temp_max: 297.06,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 909,
        humidity: 73,
        temp_kf: 0,
      },

      clouds: {
        all: 24,
      },
    },
    {
      dt: 1659042000,
      main: {
        temp: 296.42,
        feels_like: 296.76,
        temp_min: 296.42,
        temp_max: 296.42,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 908,
        humidity: 75,
        temp_kf: 0,
      },

      clouds: {
        all: 6,
      },
    },
    {
      dt: 1659052800,
      main: {
        temp: 295.77,
        feels_like: 296.1,
        temp_min: 295.77,
        temp_max: 295.77,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 908,
        humidity: 77,
        temp_kf: 0,
      },

      clouds: {
        all: 6,
      },
    },
    {
      dt: 1659063600,
      main: {
        temp: 298.18,
        feels_like: 298.49,
        temp_min: 298.18,
        temp_max: 298.18,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 909,
        humidity: 67,
        temp_kf: 0,
      },

      clouds: {
        all: 38,
      },
    },
    {
      dt: 1659074400,
      main: {
        temp: 301.89,
        feels_like: 302.71,
        temp_min: 301.89,
        temp_max: 301.89,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 909,
        humidity: 52,
        temp_kf: 0,
      },

      clouds: {
        all: 27,
      },
    },
    {
      dt: 1659085200,
      main: {
        temp: 303.84,
        feels_like: 303.95,
        temp_min: 303.84,
        temp_max: 303.84,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 907,
        humidity: 42,
        temp_kf: 0,
      },

      clouds: {
        all: 69,
      },
    },
    {
      dt: 1659096000,
      main: {
        temp: 301.05,
        feels_like: 302.24,
        temp_min: 301.05,
        temp_max: 301.05,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 907,
        humidity: 58,
        temp_kf: 0,
      },

      clouds: {
        all: 84,
      },
    },
    {
      dt: 1659106800,
      main: {
        temp: 299.75,
        feels_like: 299.75,
        temp_min: 299.75,
        temp_max: 299.75,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 908,
        humidity: 63,
        temp_kf: 0,
      },

      clouds: {
        all: 89,
      },
    },
    {
      dt: 1659117600,
      main: {
        temp: 298.58,
        feels_like: 298.93,
        temp_min: 298.58,
        temp_max: 298.58,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 909,
        humidity: 67,
        temp_kf: 0,
      },

      clouds: {
        all: 94,
      },
    },
    {
      dt: 1659128400,
      main: {
        temp: 297.5,
        feels_like: 297.84,
        temp_min: 297.5,
        temp_max: 297.5,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 907,
        humidity: 71,
        temp_kf: 0,
      },

      clouds: {
        all: 99,
      },
    },
    {
      dt: 1659139200,
      main: {
        temp: 296.5,
        feels_like: 296.88,
        temp_min: 296.5,
        temp_max: 296.5,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 907,
        humidity: 76,
        temp_kf: 0,
      },

      clouds: {
        all: 93,
      },
    },
    {
      dt: 1659150000,
      main: {
        temp: 298.55,
        feels_like: 298.87,
        temp_min: 298.55,
        temp_max: 298.55,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 908,
        humidity: 66,
        temp_kf: 0,
      },

      clouds: {
        all: 75,
      },
    },
  ],
};

const weatherChartSlice = createSlice({
  name: "weatherChart",
  initialState,
  reducers: {},
});

export default weatherChartSlice;

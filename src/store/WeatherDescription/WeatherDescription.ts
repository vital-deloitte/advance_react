import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherType } from "../../components/assets/WeatherInterfaces/AllTypes";

const initialState: Array<WeatherType> = [
  {
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    dt: 1658723296,
    main: {
      temp: 296.95,
      feels_like: 297.42,
      temp_min: 296.95,
      temp_max: 297.05,
      pressure: 1015,
      humidity: 78,
    },
    name: "Bangalore",

    sys: {
      sunrise: 1658709202,
      sunset: 1658755111,
    },
  },
];

const weatherDescriptionSlice = createSlice({
  name: "weatherDescription",
  initialState,
  reducers: {
    appendWeather: (
      state: WeatherType[],
      action: PayloadAction<WeatherType>
    ) => {
      state.push(action.payload);
    },

    popWeather: (state: WeatherType[], action: PayloadAction<WeatherType>) => {
      state.filter((weather) => weather !== action.payload);
    },
  },
});

export default weatherDescriptionSlice;

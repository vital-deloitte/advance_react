import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherType } from "../../components/assets/WeatherInterfaces/AllTypes";

interface WeatherDescStateType {
  weatherArray: Array<WeatherType>;
  findCityAndDetails: Record<string, WeatherType>;
}

// const weatherArray: Array<WeatherType> = [];
// const findCityAndDetails: Record<string, WeatherType> = {}

const weatherDescriptionSlice = createSlice({
  name: "weatherDescription",
  initialState: { weatherArray: [], findCityAndDetails: {} },
  reducers: {
    appendWeather: (
      state: WeatherDescStateType,
      action: PayloadAction<WeatherType>
    ) => {
      state.weatherArray.push(action.payload);
    },

    popWeather: (
      state: WeatherDescStateType,
      action: PayloadAction<WeatherType>
    ) => {
      state.weatherArray.filter((weather) => weather !== action.payload);
    },

    appendToRecord: (
      state: WeatherDescStateType,
      action: PayloadAction<WeatherType>
    ) => {
      state.findCityAndDetails[action.payload.name] = (action.payload);
    },
  },
});

export default weatherDescriptionSlice;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter";
import weatherChartSlice from "./WeatherDescription/WeatherChart";
import typingSlice from "./Search/Typing";
import weatherDescriptionSlice from "./WeatherDescription/WeatherDescription";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    search: typingSlice.reducer,
    weatherDesc: weatherDescriptionSlice.reducer,
    chartData: weatherChartSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const typingActions = typingSlice.actions;
export const weatherDescAction = weatherDescriptionSlice.actions;
export const weatherChartAction = weatherChartSlice.actions;

export default store;

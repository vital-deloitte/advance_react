import { configureStore } from "@reduxjs/toolkit";
import typingSlice from "./Search/Typing";
import weatherDescriptionSlice from "./WeatherDescription/WeatherDescription";

const store = configureStore({
  reducer: {
    search: typingSlice.reducer,
    weatherDesc: weatherDescriptionSlice.reducer,
  },
});

export const typingActions = typingSlice.actions;
export const weatherDescAction = weatherDescriptionSlice.actions;

export default store;
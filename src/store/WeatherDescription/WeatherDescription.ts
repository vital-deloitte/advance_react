import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherType } from "../../components/assets/WeatherInterfaces/AllTypes";

interface WeatherDescStateType {
  findCityAndDetails: Record<string, WeatherType>;
  bookMarks: Array<string>;
}

const weatherDescriptionSlice = createSlice({
  name: "weatherDescription",
  initialState: {
    findCityAndDetails: {},
    bookMarks: [],
  },
  reducers: {

    popBookMark: (
      state: WeatherDescStateType,
      action: PayloadAction<string>
    ) => {
      state.bookMarks = state.bookMarks.filter(
        (weather) => weather !== action.payload
      );
    },

    appendToRecord: (
      state: WeatherDescStateType,
      action: PayloadAction<WeatherType>
    ) => {
      state.findCityAndDetails[action.payload.name] = action.payload;
    },

    appendToBookMark: (
      state: WeatherDescStateType,
      action: PayloadAction<string>
    ) => {
      state.bookMarks.push(action.payload);
    },
  },
});

export default weatherDescriptionSlice;

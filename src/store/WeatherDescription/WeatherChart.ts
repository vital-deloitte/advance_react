import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ChartType,
  CloudType,
} from "../../components/assets/WeatherInterfaces/chartTypes";

const initialState: ChartType = {
  data: [],
};

const weatherChartSlice = createSlice({
  name: "weatherChart",
  initialState,
  reducers: {
    populateArray: (
      state: ChartType,
      action: PayloadAction<Array<CloudType>>
    ) => {
      state.data = action.payload;
    },
  },
});

export default weatherChartSlice;

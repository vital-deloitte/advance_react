import React from "react";
import "./WeatherChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { ChartDataType } from "../../assets/WeatherInterfaces/chartTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
};

function WeatherChart() {
  const chartData = useSelector((state: ChartDataType) => state.chartData);
  const dataDisplay = chartData.data;
  const labels: Array<String> = [];
  const temperatures: Array<number> = [];

  dataDisplay.forEach((reading) => {
    temperatures.push(reading.main.temp);
  });

  dataDisplay.forEach((reading) => {
    labels.push(new Date(reading.dt * 1000).toDateString());
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sunrise",
        data: temperatures,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="bottom-container container pt-5">
      <div className="row chart-details justify-content-center pt-4">
        <div className="col-sm-5 pb-3">
          <p
            style={{
              paddingBottom: "4em",
              color: "#C4C4C4",
              fontSize: "1.3em",
              fontFamily: "Poppins",
            }}
          >
            SUNRISE &#38; SUNSET
          </p>
          <p
            style={{
              color: "#9A9A9A",
              fontFamily: "Roboto",
              fontWeight: "500",
            }}
          >
            Length of day: <span style={{ color: "#2C2C2C" }}>13H 12M</span>
          </p>
          <p
            style={{
              color: "#9A9A9A",
              fontFamily: "Roboto",
              fontWeight: "400",
            }}
          >
            Remaining daylight: <span style={{ color: "#2C2C2C" }}>9H 22M</span>
          </p>
        </div>
        <div className="col-sm-6">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default WeatherChart;

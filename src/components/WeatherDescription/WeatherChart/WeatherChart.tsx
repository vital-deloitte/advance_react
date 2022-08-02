import React, { useEffect, useState } from "react";
import "./WeatherChart.scss";
import { useLocation } from "react-router-dom";
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
import {
  WeatherStateType,
  WeatherType,
} from "../../assets/WeatherInterfaces/AllTypes";
import moment from "moment";

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

interface CSSStyle {
  paddingTop: string;
  marginBottom: string;
}

export const options = {
  responsive: true,
};

function WeatherChart({
  cityName,
  cityDetails,
}: {
  cityName: string;
  cityDetails: WeatherType;
}) {
  const chartData = useSelector((state: WeatherStateType) => state.weatherDesc);
  const dataDisplay = chartData.findCityAndDetails[cityName].list;
  const [currTime, setCurrTime] = useState<Date>();
  const labels: Array<String> = [];
  const temperatures: Array<number> = [];

  useEffect(() => {
    const now = new Date(cityDetails.sys.sunrise * 1000);
    setCurrTime(now);
  }, [cityDetails.sys.sunrise]);

  const res =
    Number(
      new Date(cityDetails.sys.sunset * 1000).getTime().toString()
    ).valueOf() - Number(new Date().getTime().toString()).valueOf();
  const hours = Number(Math.floor(res / 3600000));

  // console.log(Math.floor(res / 3600000), Math.floor(res / 60000 - hours * 60));

  const [getHours, setGetHours] = useState<number>(Math.floor(res / 3600000));
  const [getMinutes] = useState<number>(Math.floor(res / 60000 - hours * 60));
  // console.log(new Date().getHours());

  useEffect(() => {
    if (new Date().getHours() < getHours) {
      setGetHours(0);
    }
  }, [getHours]);

  dataDisplay.forEach((reading) => {
    temperatures.push(reading.main.temp - 273.15);
  });

  let daylengthpad: CSSStyle;

  const location = useLocation();

  if (location.pathname === "/") {
    daylengthpad = {
      paddingTop: "4em",
      marginBottom: "0em",
    };
  } else {
    daylengthpad = {
      paddingTop: "7em",
      marginBottom: "2em",
    };
  }

  const seen = new Set<string>();
  dataDisplay.forEach((reading) => {
    const time = new Date(reading.dt * 1000).toDateString().split(" ");
    if (!seen.has(time[2])) {
      labels.push(time[2] + "-" + time[1] + "-" + time[3].split("0")[1]);
    }
    seen.add(time[2]);
  });

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Temperature",
        data: temperatures,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="bottom-container container pt-4">
      <div className="row chart-details justify-content-center  pt-4">
        <div className="col-sm-6">
          <p className="main-title">SUNRISE &#38; SUNSET</p>
          <div className="col-12 d-block d-sm-none pb-2">
            <Line data={data} options={options} />
          </div>
          <p className="day-length" style={daylengthpad}>
            Length of day:{" "}
            <span style={{ color: "#2C2C2C" }}>
              {currTime &&
                moment(currTime.toISOString()).format("hh mm A").split(" ")[0] +
                  "H " +
                  moment(currTime.toISOString())
                    .format("hh mm A")
                    .split(" ")[1] +
                  "M "}
            </span>
          </p>
          <p className="remaining-length">
            Remaining daylight:{" "}
            <span style={{ color: "#2C2C2C" }}>
              {getHours.toString() + "H " + getMinutes.toString() + "M"}
            </span>
          </p>
        </div>
        <div className="col-sm-6 d-none d-sm-block">
          <Line style={{ maxHeight: "260px" }} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default WeatherChart;

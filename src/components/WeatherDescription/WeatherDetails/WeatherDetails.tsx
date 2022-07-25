import React, { useState } from "react";
import "./WeatherDetails.scss";
import { WeatherStateType } from "../../assets/WeatherInterfaces/AllTypes";
import { useSelector } from "react-redux";

function WeatherDetails() {
  const descriptions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );

  const [time] = useState(new Date(descriptions[0].dt.valueOf()));

  return (
    <div className="third-container container">
      <div className="row weather-details justify-content-between pt-4">
        <div className="col-sm-2 align-horizontal">
          <p className="weather-detail-title">TIME</p>
          <p className="weather-detail-reading">
            {time.getHours() + " : " + time.getMinutes()}
          </p>
        </div>
        <div className="col-sm-2 align-horizontal">
          <p className="weather-detail-title">PRESSURE</p>
          <p className="weather-detail-reading">
            {descriptions[0].main.pressure.toString()}
          </p>
        </div>
        <div className="col-sm-2 align-horizontal">
          <p className="weather-detail-title">% RAIN</p>
          <p className="weather-detail-reading">58%</p>
        </div>
        <div className="col-sm-2 align-horizontal">
          <p className="weather-detail-title">HUMIDITY</p>
          <p className="weather-detail-reading">
            {descriptions[0].main.humidity.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;

import React, { useState } from "react";
import "./WeatherDetails.scss";
import { WeatherType } from "../../assets/WeatherInterfaces/AllTypes";

function WeatherDetails({ cityDetails }: { cityDetails: WeatherType }) {
  const [time] = useState(new Date(cityDetails.dt.valueOf() * 1000));

  return (
    <div className="third-container container">
      <div className="row weather-details justify-content-between pt-4">
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title">TIME</p>
          <p className="weather-detail-reading">
            {time.getHours() + " : " + time.getMinutes()}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title">PRESSURE</p>
          <p className="weather-detail-reading">
            {cityDetails.main.pressure.toString()}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title">% RAIN</p>
          <p className="weather-detail-reading">58%</p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title">HUMIDITY</p>
          <p className="weather-detail-reading">
            {cityDetails.main.humidity.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;

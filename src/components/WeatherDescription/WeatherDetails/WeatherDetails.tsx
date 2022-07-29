import React, { useState } from "react";
import "./WeatherDetails.scss";
import { WeatherType } from "../../assets/WeatherInterfaces/AllTypes";
import { useLocation } from "react-router-dom";
import image from "../assets/svg1.svg";
import rainy from "../assets/rainy.png";
import moment from "moment";

interface CSSStyle {
  fontWeight: string;
  fontSize: string;
}

function WeatherDetails({ cityDetails }: { cityDetails: WeatherType }) {
  const [time] = useState(new Date(cityDetails.dt.valueOf() * 1000));
  let fontStyleTitle: CSSStyle;
  let fontStyleReading: CSSStyle;
  const location = useLocation();
  const alert = cityDetails.weather[0].main === "Rain";

  if (location.pathname === "/") {
    fontStyleReading = {
      fontSize: "1em",
      fontWeight: "700",
    };

    fontStyleTitle = {
      fontSize: "1em",
      fontWeight: "500",
    };
  } else if (window.innerWidth <= 600) {
    fontStyleReading = {
      fontSize: "1em",
      fontWeight: "700",
    };

    fontStyleTitle = {
      fontSize: "0.9em",
      fontWeight: "700",
    };
  } else {
    fontStyleReading = {
      fontSize: "1.5em",
      fontWeight: "700",
    };

    fontStyleTitle = {
      fontSize: "1.5em",
      fontWeight: "700",
    };
  }

  return (
    <div className="third-container container">
      {alert && (
        <div className="weather-details mb-4 d-block d-sm-none">
          <div className="row pb-4">
            <div className="col-12">
              <span>
                <img src={image} alt="svg" />
              </span>
              <span className="weather-heading">&nbsp;&nbsp;WARNING</span>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className="weather-detail-title" style={fontStyleTitle}>
                % RAIN
              </p>
              <p className="weather-detail-reading" style={fontStyleReading}>
                58%
              </p>
            </div>
            <div className="col-3">
              <p className="weather-detail-title" style={fontStyleTitle}>
                EXP.TIME
              </p>

              <p className="weather-detail-reading" style={fontStyleReading}>
                {moment(time.toISOString()).add(1, "hour").format("LT")}
              </p>
            </div>
            <div className="col-6">
              <img
                style={{ height: "80%", width: "70%" }}
                src={rainy}
                alt="Rainy"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span className="weather-footer">
                &nbsp;&nbsp;Expecting Rainfall
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="row weather-details justify-content-between pt-4">
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            TIME
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {moment(time.toISOString()).format("LT")}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            PRESSURE
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {cityDetails.main.pressure.toString()}
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            % RAIN
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            58%
          </p>
        </div>
        <div className="col-sm-2 col-3 align-horizontal">
          <p className="weather-detail-title" style={fontStyleTitle}>
            HUMIDITY
          </p>
          <p className="weather-detail-reading" style={fontStyleReading}>
            {cityDetails.main.humidity.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;

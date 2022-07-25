import React, { useState } from "react";
import "./WeatherDescription.scss";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation } from "react-router-dom";
import weatherpic from "./assets/sunny.png";
import arrow from "./assets/arrow.png";
import degree from "./assets/degree.png";
import WeatherChart from "./WeatherChart/WeatherChart";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
// import weatherDescAction from "../../store/store";
import { useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";

function WeatherDescription() {
  const descriptions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const location = useLocation();
  console.log(location);
  const city = location.pathname.slice(1);
  const cityDetails = descriptions.findCityAndDetails[city];
  console.log(cityDetails);

  const [cityWeatherDescription] = useState(cityDetails);

  return (
    <div>
      <div className="top-container">
        <div className="left-top">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <span>&lt; &nbsp;&nbsp;</span>
            <span style={{ color: "#0170FE" }}>Back</span>
          </Link>
        </div>
        <div className="right-top">
          <p>
            Add to List &nbsp;&nbsp;
            <AddIcon
              style={{
                backgroundColor: "#DADADA",
                borderRadius: "50%",
                color: "black",
              }}
            />
          </p>
        </div>
      </div>
      <div className="middle-container container">
        <div className="row justify-content-center no-style">
          <div className="col-sm-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="weather-img" src={weatherpic} alt="Weather Icon" />
          </div>
        </div>
        <div className="row justify-content-center pt-4">
          <div className="col-sm-3">
            <p className="title-city">
              {cityWeatherDescription.name} &nbsp;&nbsp;{" "}
              <img id="arrow" src={arrow} alt="weather-arrow" />
            </p>
          </div>
        </div>
        <div className="row justify-content-center pt-1">
          <div className="col-sm-1">
            <p className="degree-number">
              {(cityWeatherDescription.main.temp.valueOf() / 10)
                .toFixed(0)
                .toString()}
              <img id="degree-picture" src={degree} alt="degree" />
            </p>
          </div>
        </div>
      </div>
      <WeatherDetails cityDetails={cityWeatherDescription} />
      <WeatherChart cityName={cityWeatherDescription.name} />
    </div>
  );
}

export default WeatherDescription;

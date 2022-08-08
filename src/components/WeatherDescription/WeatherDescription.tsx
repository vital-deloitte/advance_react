import React, { useState } from "react";
import "./WeatherDescription.scss";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation } from "react-router-dom";
import arrow from "./assets/arrow.png";
import degree from "./assets/degree.png";
import WeatherChart from "./WeatherChart/WeatherChart";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
import { useDispatch, useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import { weatherDescAction } from "../../store/store";
import Notify from "../Notify/Notify";

function WeatherDescription() {
  const descriptions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const location = useLocation();
  console.log(window.location.href);
  const city = decodeURIComponent(location.pathname.slice(1));
  const cityDetails = descriptions.findCityAndDetails[city];
  const [cityWeatherDescription] = useState(cityDetails);
  console.log(location, "n", city, "n", descriptions.findCityAndDetails);
  const dispatch = useDispatch();
  const handleBtnClick = () => {
    let added = document.getElementById("addedtolist");
    let add = document.getElementById("addtolist");
    if (added) {
      added.style.display = "block";
      if (add && added.style.display === "block") {
        add.style.display = "none";
      }
    }

    const alreadyadded = new Set<string>();
    for (let cityName of descriptions.bookMarks) {
      alreadyadded.add(cityName);
    }
    !alreadyadded.has(cityWeatherDescription.name) &&
      dispatch(weatherDescAction.appendToBookMark(cityWeatherDescription.name));
  };

  const weatherPic =
    "https://openweathermap.org/img/wn/" +
    cityDetails.weather[0].icon +
    "@2x.png";

  const bookMarkCity = new Set<string>();
  descriptions.bookMarks.forEach((city) => {
    bookMarkCity.add(city);
  });

  return (
    <div>
      <div className="top-container container-fluid" data-testid="weather-desc">
        <div className="row justify-content-around ">
          <div className="col-sm-2 col-1 ml-2">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              <span>&lt; &nbsp;&nbsp;</span>
              <span className="backbtn" style={{ color: "#0170FE" }}>
                Back
              </span>
            </Link>
          </div>
          <div className="col-sm-2 col-1"></div>
          <div className="col-sm-1 col-2 d-block d-sm-none"></div>

          {!bookMarkCity.has(cityWeatherDescription.name) ? (
            <>
              <div className="col-sm-7 col-8">
                <div id="addtolist" style={{ textAlign: "right" }}>
                  <p onClick={handleBtnClick} id="add-to-list">
                    Add to List &nbsp;&nbsp;
                    <AddIcon className="addicon" />
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-sm-7 col-8">
                <div id="addedtolist" className="button-change">
                  <Notify cityDetails={cityDetails} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="middle-container container">
        <div className="row justify-content-center no-style">
          <div className="col-sm-2 col-6">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="weather-img" src={weatherPic} alt="Weather Icon" />
          </div>
        </div>
        <div className="row justify-content-center pt-1">
          <div className="col-sm-3">
            <p className="title-city">
              {cityWeatherDescription.name} &nbsp;
              <img id="arrow" src={arrow} alt="weather-arrow" />
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-1">
            <p className="degree-number">
              {(cityWeatherDescription.main.temp.valueOf() - 273.15)
                .toFixed(0)
                .toString()}
              <img id="degree-picture" src={degree} alt="degree" />
            </p>
          </div>
        </div>
      </div>
      <WeatherDetails cityDetails={cityWeatherDescription} />
      <WeatherChart
        cityName={cityWeatherDescription.name}
        cityDetails={cityWeatherDescription}
      />
    </div>
  );
}

export default WeatherDescription;

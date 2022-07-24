import React from "react";
import { Link } from "react-router-dom";
import weatherpic from "./assets/3clouds.png";
import "./WeatherCard.scss";
import image from "./assets/svg1.svg";

function WeatherCard() {
  return (
    <div className="container mt-5">
      <div className="row remove-style">
        <div
          className="col-sm-3 offset-2 card-main"
          style={{ paddingLeft: "1em" }}
        >
          <div className="row justify-content-between pt-2">
            <div className="col-sm-4 align-self-center">
              <p className="rob-500">Bangalore</p>
            </div>
            <div className="col-sm-2">
              <Link to={" "} style={{ textDecoration: "none" }}>
                <p className="arrow" style={{ color: "#000000" }}>
                  {" "}
                  <b>&gt;</b>
                </p>
              </Link>
            </div>
          </div>
          <div className="row justify-content-between pt-1">
            <div className="col-sm-4">
              <span className="degree">20</span>
              <span className="degree-icon">&#176;</span>
            </div>
            <div className="col-sm-5  align-self-center">
              <img height="70%" width="70%" src={weatherpic} alt="clouds" />
            </div>
          </div>
          <div className="row pt-4 justify-content-between pb-2">
            <div className="col-sm-5 align-self-center">
              <span>
                <img src={image} alt="svg" />
              </span>
              <span className="weather-footer">&nbsp;&nbsp;WARNING</span>
            </div>
            <div className="col-sm-5 align-self-center pt-3">
              <p className="weather-footer">Expecting Rainfall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

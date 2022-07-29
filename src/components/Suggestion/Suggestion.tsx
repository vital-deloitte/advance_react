import React from "react";
import "./Suggestion.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";

function Suggestion() {
  const citySuggestions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );

  return (
    <div className="row pt-4 justify-content-flex-start remove-style">
      <div className="col-sm-12 offset-1 d-none d-sm-block"></div>
      {citySuggestions.weatherArray.map((city) => (
        <div className="col-sm-2 col-3 cities" key={city.dt.valueOf()}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/${city.name}`}
          >
            {city.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;

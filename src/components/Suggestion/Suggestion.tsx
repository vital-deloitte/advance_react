import React, { useEffect, useState } from "react";
import "./Suggestion.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  WeatherStateType,
  WeatherType,
} from "../assets/WeatherInterfaces/AllTypes";

function Suggestion() {
  const citySuggestions = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );

  const [cityWeather, setCityWeather] = useState<Array<WeatherType>>([]);
  useEffect(() => {
    const uniquify = new Set<string>();
    let resultUniqueArray: Array<WeatherType> = [];
    citySuggestions.weatherArray.forEach((city) => {
      if (!uniquify.has(city.name)) {
        resultUniqueArray.push(city);
      }
      uniquify.add(city.name);
    });
    setCityWeather(resultUniqueArray);
  }, [citySuggestions.weatherArray]);

  return (
    <div className="row pt-4 justify-content-flex-start remove-style">
      <div className="col-sm-12 offset-1 d-none d-sm-block"></div>
      {cityWeather.map((city) => (
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

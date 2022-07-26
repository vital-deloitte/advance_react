import React from "react";
import "./BookMark.scss";
import NoLocation from "../NoLocation/NoLocation";
import { useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import WeatherDetails from "../WeatherDescription/WeatherDetails/WeatherDetails";
import WeatherChart from "../WeatherDescription/WeatherChart/WeatherChart";

function BookMark() {
  const bookMarkItems = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );

  return (
    <>
      {bookMarkItems.bookMarks.length <= 0 ? (
        <NoLocation />
      ) : (
        <>
          {bookMarkItems.bookMarks.map((cityWeatherDescription) => {
            console.log(
              cityWeatherDescription,
              bookMarkItems,
              bookMarkItems.findCityAndDetails[cityWeatherDescription]
            );
            return (
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <WeatherDetails
                      cityDetails={
                        bookMarkItems.findCityAndDetails[cityWeatherDescription]
                      }
                    />
                    <WeatherChart cityName={cityWeatherDescription} />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default BookMark;

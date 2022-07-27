import React from "react";
import "./BookMark.scss";
import NoLocation from "../NoLocation/NoLocation";
import { useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import WeatherDetails from "../WeatherDescription/WeatherDetails/WeatherDetails";
import WeatherChart from "../WeatherDescription/WeatherChart/WeatherChart";
import degree from "./assets/degree.png";
import arrow from "./assets/arrow.png";
import Carousel from "react-bootstrap/Carousel";

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
          <Carousel
            variant="dark"
            controls={bookMarkItems.bookMarks.length > 1}
            indicators={bookMarkItems.bookMarks.length > 1}
            interval={null}
          >
            {bookMarkItems.bookMarks.map((cityWeatherDescription) => {
              const weatherPic =
                "https://openweathermap.org/img/wn/" +
                bookMarkItems.findCityAndDetails[cityWeatherDescription]
                  .weather[0].icon +
                "@2x.png";
              return (
                <Carousel.Item>
                  <div key={cityWeatherDescription}>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-sm-7 col-12 ">
                          <div className="middle-container container">
                            <div className="row justify-content-center no-style">
                              <div className="col-sm-2 col-4">
                                <img
                                  className="weather-img"
                                  src={weatherPic}
                                  alt="Weather Icon"
                                />
                              </div>
                            </div>
                            <div className="row justify-content-center pt-1">
                              <div className="col-sm-3">
                                <p className="title-city">
                                  {" "}
                                  {cityWeatherDescription}&nbsp;
                                  <img id="arrow" src={arrow} alt="arrow" />
                                </p>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                              <div className="col-sm-2 ">
                                <p className="degree-number">
                                  {" "}
                                  {(
                                    bookMarkItems.findCityAndDetails[
                                      cityWeatherDescription
                                    ].main.temp.valueOf() / 10
                                  )
                                    .toFixed(0)
                                    .toString()}
                                  <img
                                    id="degree-picture"
                                    src={degree}
                                    alt="degree"
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                          <WeatherDetails
                            cityDetails={
                              bookMarkItems.findCityAndDetails[
                                cityWeatherDescription
                              ]
                            }
                          />
                          <WeatherChart
                            cityName={cityWeatherDescription}
                            cityDetails={
                              bookMarkItems.findCityAndDetails[
                                cityWeatherDescription
                              ]
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  );
}

export default BookMark;

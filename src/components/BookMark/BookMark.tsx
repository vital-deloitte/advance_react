import React from "react";
import "./BookMark.scss";
import NoLocation from "../NoLocation/NoLocation";
import { useDispatch, useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";
import WeatherDetails from "../WeatherDescription/WeatherDetails/WeatherDetails";
import WeatherChart from "../WeatherDescription/WeatherChart/WeatherChart";
import degree from "./assets/degree.png";
import { useState, useEffect } from "react";
import arrow from "./assets/arrow.png";
import Carousel from "react-bootstrap/Carousel";
import { weatherDescAction } from "../../store/store";

function BookMark() {
  const [controlsAreVisible, setControlsAreVisible] = useState(true);

  const bookMarkItems = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const dispatch = useDispatch();

  const handleRemove = (cityName: string) => {
    dispatch(weatherDescAction.popBookMark(cityName));
  };

  useEffect(() => {
    // iPhone X width, for example
    if (window.innerWidth <= 600) {
      setControlsAreVisible(false);
    }
    if (window.innerWidth > 600) {
      setControlsAreVisible(true);
    }

    // you can also set up event listeners here for "resize" for full responsiveness
  }, []);

  return (
    <>
      {bookMarkItems.bookMarks.length <= 0 ? (
        <NoLocation />
      ) : (
        <>
          <Carousel
            variant="dark"
            controls={bookMarkItems.bookMarks.length > 1 && controlsAreVisible}
            indicators={
              bookMarkItems.bookMarks.length > 1 && controlsAreVisible
            }
            interval={controlsAreVisible ? 3000 : null}
            // interval={null}
          >
            {bookMarkItems.bookMarks.map((cityWeatherDescription) => {
              const weatherPic =
                "https://openweathermap.org/img/wn/" +
                bookMarkItems.findCityAndDetails[cityWeatherDescription]
                  .weather[0].icon +
                "@2x.png";
              return (
                <Carousel.Item key={cityWeatherDescription}>
                  <div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-sm-7 col-12 ">
                          <div className="middle-container container">
                            <div className="row justify-content-center no-style pt-4">
                              <div className="col-sm-2 col-2"></div>
                              <div className="col-sm-2 d-block d-sm-none col-1"></div>
                              <div className="col-sm-2 d-block d-sm-none col-1"></div>
                              <div
                                className="col-sm-6 col-4"
                                style={{ textAlign: "center" }}
                              >
                                <img
                                  className="weather-img1"
                                  src={weatherPic}
                                  alt="Weather Icon"
                                />
                              </div>

                              <div
                                className="col-sm-2 col-4 "
                                style={{ textAlign: "right" }}
                              >
                                <button
                                  type="button"
                                  id="removal"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    handleRemove(cityWeatherDescription)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            <div className="row justify-content-center pt-1">
                              <div className="col-sm-3">
                                <p className="title-city1">
                                  {" "}
                                  {cityWeatherDescription}&nbsp;
                                  <img id="arrow1" src={arrow} alt="arrow" />
                                </p>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                              <div className="col-sm-2 ">
                                <p className="degree-number1">
                                  {" "}
                                  {(
                                    bookMarkItems.findCityAndDetails[
                                      cityWeatherDescription
                                    ].main.temp.valueOf() / 10
                                  )
                                    .toFixed(0)
                                    .toString()}
                                  <img
                                    id="degree-picture1"
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

import React, { useEffect, createRef, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";
import { typingActions, weatherDescAction } from "../../store/store";
import Suggestion from "../Suggestion/Suggestion";
import {
  WeatherStateType,
  WeatherType,
} from "../assets/WeatherInterfaces/AllTypes";
import axios, { AxiosResponse } from "axios";
import { APP_KEY } from "../assets/Constants";
import WeatherCardSummary from "../WeatherCardSummary/WeatherCardSummary";
import cityAutoComplete from "../assets/IndianCity.json";
import { IndianCityType } from "../assets/IndianCity";
import AddLocationIcon from "@mui/icons-material/AddLocation";

function Search() {
  const searchText = useSelector((state: SearchType) => state.search);
  const isPresentWeather = useSelector(
    (state: WeatherStateType) => state.weatherDesc.weatherArray
  );
  const dispatch = useDispatch();
  const inputRef = createRef<HTMLDivElement>();

  const [cityNameMatch, setCityNameMatch] = useState<Array<IndianCityType>>([]);
  const style = {
    border: "1px solid #DADADA",
    outline: "none",
    padding: "10px 15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    margin: "0",
    alignItems: "center",
  };

  useEffect(() => {
    if (searchText.searchContent.length > 0) {
      let matches: Array<IndianCityType> = [];
      matches = cityAutoComplete.filter((cityName) => {
        const regex = new RegExp(`^${searchText.searchContent}.*`, "i");
        return cityName.name.match(regex);
      });
      matches = matches
        .sort(function compare(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .slice(0, 3);
      setCityNameMatch(matches);
    }
  }, [searchText.searchContent]);

  const handleSearch = (searchString: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(typingActions.populateContent(searchString.target.value));
  };

  const handleFocus = () => {
    dispatch(typingActions.typingStart());
  };

  const handleBlur = () => {
    setTimeout(() => {
      dispatch(typingActions.typingEnd());
    }, 300);
  };

  const handleAutoFillCompletion = (
    e: React.MouseEvent<HTMLParagraphElement>
  ) => {
    dispatch(typingActions.populateContent(e.currentTarget.innerHTML));
  };

  const handleSearchClick = () => {
    let result: WeatherType;
    const getWeatherDetails = `https://api.openweathermap.org/data/2.5/weather?q=${searchText.searchContent}&appid=${APP_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText.searchContent}&appid=${APP_KEY}`;
    if (searchText.searchContent.length > 0) {
      axios
        .get(getWeatherDetails)
        .then((response: AxiosResponse) => {
          result = {
            weather: response.data.weather,
            main: response.data.main,
            dt: response.data.dt,
            name: response.data.name,
            sys: response.data.sys,
            list: [],
          };
          axios
            .get(forecastUrl)
            .then((response: AxiosResponse) => {
              result = {
                ...result,
                list: response.data.list,
              };

              const added = new Set<String>();
              for (let city of isPresentWeather) {
                added.add(city.name);
              }

              !added.has(result.name) &&
                dispatch(weatherDescAction.appendWeather(result));
              dispatch(weatherDescAction.appendToRecord(result));
              return result;
            })
            .catch((err) => console.log(err));
          return result;
        })
        .catch((err) => console.log(err));

      if (inputRef && inputRef.current) {
        inputRef.current.focus();
        dispatch(typingActions.typingStart());
      }
    }
  };

  return (
    <>
      <div className="search-container container">
        <div className="row justify-content-center align-items-center remove-style">
          <div className="col-sm-8">
            <TextField
              variant="standard"
              fullWidth
              autoComplete="off"
              className="search-bar"
              value={searchText.searchContent}
              sx={style}
              ref={inputRef}
              placeholder={"Search Location"}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      <SearchIcon
                        id="search-icon-button"
                        className="search-icon"
                        onClick={handleSearchClick}
                      />
                    }
                  </InputAdornment>
                ),
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleSearch(event)
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <br></br>
            <br></br>
            <div className={searchText.isTyping === true ? "suggestions" : ""}>
              {searchText.isTyping === true && (
                <p className="text-muted">Suggestions</p>
              )}
              {searchText.isTyping === true &&
                cityNameMatch.map((cityName) => {
                  return (
                    <div className="container" key={cityName.id.valueOf()}>
                      <div className="row">
                        <div className="col-sm-1 col-1 pb-2">
                          <AddLocationIcon />
                        </div>
                        <div
                          className="col-sm-3 col-3"
                          style={{ cursor: "pointer" }}
                        >
                          <p onClick={(e) => handleAutoFillCompletion(e)}>
                            {cityName.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {searchText.isTyping === true && <Suggestion />}
          </div>
        </div>
      </div>
      {isPresentWeather.length > 0 && searchText.isTyping === true && (
        <WeatherCardSummary />
      )}
    </>
  );
}

export default Search;

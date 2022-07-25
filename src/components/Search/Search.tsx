import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";
import { typingActions, weatherDescAction } from "../../store/store";
import Suggestion from "../Suggestion/Suggestion";
import { WeatherType } from "../assets/WeatherInterfaces/AllTypes";
import axios, { AxiosResponse } from "axios";
import { APP_KEY } from "../assets/Constants";

function Search() {
  const searchText = useSelector((state: SearchType) => state.search);
  const dispatch = useDispatch();

  const style = {
    borderRadius: "100px",
    border: "1px solid #DADADA",
    outline: "none",
    padding: "10px 15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    margin: "0",
    alignItems: "center",
  };

  const handleSearch = (searchString: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(typingActions.populateContent(searchString.target.value));
  };

  const handleFocus = () => {
    dispatch(typingActions.typingStart());
  };

  const handleSearchClick = () => {
    const getWeatherDetails = `https://api.openweathermap.org/data/2.5/weather?q=${searchText.searchContent}&appid=${APP_KEY}`;
    if (searchText.searchContent.length > 0)
      dispatch(typingActions.populateHistory(searchText.searchContent));
    axios
      .get(getWeatherDetails)
      .then((response: AxiosResponse) => {
        const result: WeatherType = {
          weather: response.data.weather,
          main: response.data.main,
          dt: response.data.dt,
          name: response.data.name,
          sys: response.data.sys,
        };
        dispatch(weatherDescAction.appendWeather(result));
        dispatch(weatherDescAction.appendToRecord(result));
        return result;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="search-container container">
        <div className="row justify-content-center align-items-center remove-style">
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              variant="standard"
              fullWidth
              className="search-bar"
              sx={style}
              placeholder="Search Location"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      <SearchIcon
                        sx={{
                          borderLeft: "1px solid #DADADA",
                          paddingLeft: "0.2em",
                          height: "50px",
                          cursor: "pointer",
                        }}
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
            />
          </div>
        </div>
        <Suggestion />
      </div>
    </>
  );
}

export default Search;

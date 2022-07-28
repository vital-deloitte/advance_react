import React from "react";
import "./Notify.scss";
import DoneIcon from "@mui/icons-material/Done";
import {
  WeatherStateType,
  WeatherType,
} from "../assets/WeatherInterfaces/AllTypes";
import { weatherDescAction } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

function Notify({ cityDetails }: { cityDetails: WeatherType }) {
  const dispatch = useDispatch();
  const weatherState = useSelector(
    (state: WeatherStateType) => state.weatherDesc
  );
  const handleRemove = () => {
    console.log(cityDetails, weatherState);
    dispatch(weatherDescAction.popBookMark(cityDetails.name));
  };

  return (
    <div className="flex-container container-fluid">
      <div className="row justify-content-end align-items-start">
        <div className="col-sm-2 col-7" style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-success">
            Added to list{" "}
            <DoneIcon style={{ height: "0.7em", verticalAlign: "top" }} />
          </button>
        </div>
        <div className="col-sm-2 col-4" style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notify;

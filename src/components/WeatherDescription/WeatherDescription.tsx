import React from "react";
import "./WeatherDescription.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link } from "react-router-dom";

function WeatherDescription() {
  return (
    <div>
      <div className="top-container">
        <div className="left-top">
          <Link to={"/"} style={{textDecoration: "none"}}>
            <p>&lt; Back</p>
          </Link>
        </div>
        <div className="right-top">
          <p>
            Add to List &nbsp;&nbsp;
            <AddCircleOutlineRoundedIcon />
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDescription;

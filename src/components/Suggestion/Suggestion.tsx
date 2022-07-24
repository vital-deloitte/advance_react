import React from "react";
import "./Suggestion.scss";

function Suggestion() {
  return (
    <div className="row pt-4 justify-content-flex-start remove-style">
      <div className="col-sm-1 offset-1"></div>
      <div className="col-sm-1 cities">Mumbai</div>
      <div className="col-sm-1 cities">Bangalore</div>
      <div className="col-sm-1 cities">Hyderabad</div>
    </div>
  );
}

export default Suggestion;

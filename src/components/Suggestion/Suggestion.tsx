import React from "react";
import "./Suggestion.scss";
// import { typingActions } from "../../store/store";
import { useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";

function Suggestion() {
  const typingData = useSelector((state: SearchType) => state.search);
  // const dispatch = useDispatch();

  return (
    <div className="row pt-4 justify-content-flex-start remove-style">
      <div className="col-sm-1 offset-1"></div>
      {typingData.prevHistory?.map((city) => (
        <div className="col-sm-1 cities" key={city[0]}>
          {city[1]}
        </div>
      ))}
    </div>
  );
}

export default Suggestion;

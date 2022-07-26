import React from "react";
import "./Notify.scss";
import DoneIcon from "@mui/icons-material/Done";

function Notify() {
  return (
    <div className="flex-container ">
      <div className="flex-item-left">
        <button type="button" className="btn btn-success">
          Added to list &nbsp;&nbsp; <DoneIcon />
        </button>
      </div>
      <div className="flex-item-right">
        <button type="button" className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Notify;

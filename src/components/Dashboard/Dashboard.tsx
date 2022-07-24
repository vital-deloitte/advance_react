import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import NoLocation from "../NoLocation/NoLocation";
// import WeatherCard from "../WeatherCard/WeatherCard";
// import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import WeatherDescription from "../WeatherDescription/WeatherDescription";

function Dashboard() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Search /> */}
        {/* <NoLocation /> */}
        {/* <WeatherCard /> */}
        <WeatherDescription />
      </Router>
    </div>
  );
}

export default Dashboard;

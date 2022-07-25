import React from "react";
import NoLocation from "../NoLocation/NoLocation";
import WeatherCardSummary from "../WeatherCardSummary/WeatherCardSummary";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import WeatherDescription from "../WeatherDescription/WeatherDescription";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { WeatherStateType } from "../assets/WeatherInterfaces/AllTypes";

function Dashboard() {
  const bookMarks = useSelector((state: WeatherStateType) => state.weatherDesc);
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/:cityName" element={<WeatherDescription />} />
        <Route path="/" element={<Search />} />
      </Routes>
      {bookMarks.weatherArray.length === 0 ? (
        <NoLocation />
      ) : (
        location.pathname === "/" && <WeatherCardSummary />
      )}
    </div>
  );
}

export default Dashboard;

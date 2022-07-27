import React from "react";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import WeatherDescription from "../WeatherDescription/WeatherDescription";
import { Route, Routes } from "react-router-dom";
import BookMark from "../BookMark/BookMark";
import { useSelector } from "react-redux";
import { SearchType } from "../assets/Search/SearchType";

function Dashboard() {
  const searchText = useSelector((state: SearchType) => state.search);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/:cityName" element={<WeatherDescription />} />
        <Route path="/" element={<Search />} />
      </Routes>
      {searchText.isTyping === false && <BookMark />}
    </div>
  );
}

export default Dashboard;

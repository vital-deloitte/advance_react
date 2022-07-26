import React from "react";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import WeatherDescription from "../WeatherDescription/WeatherDescription";
import { Link, Route, Routes } from "react-router-dom";
import BookMark from "../BookMark/BookMark";

function Dashboard() {
  return (
    <div>
      <Link to={"/bookmark"}>link</Link>
      <Navbar />
      <Routes>
        <Route path="/:cityName" element={<WeatherDescription />} />
        <Route path="/" element={<Search />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    </div>
  );
}

export default Dashboard;

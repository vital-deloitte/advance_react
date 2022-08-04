import React from "react";
import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";

// let container: HTMLElement;

// beforeEach(() => {
//   const view = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   container = view.container;
//   return null;
// });

test("search city in the search component", async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const getSearchBar = screen.getByPlaceholderText("Search Location");
  fireEvent.change(getSearchBar, { target: { value: "Mangalore" } });
  const getById = queryByAttribute.bind(null, "id");
  const searchIcon = getById(container, "search-icon-button");
  searchIcon && fireEvent.click(searchIcon);
  searchIcon && fireEvent.click(searchIcon);
  const result = await screen.findByText("Mangalore");
  expect(result.innerHTML).toEqual("Mangalore");
});

test("weather card summary", async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const getById = queryByAttribute.bind(null, "id");
  const searchIcon = getById(container, "search-icon-button");
  const getSearchBar = screen.getByPlaceholderText("Search Location");
  searchIcon && userEvent.click(getSearchBar);
  userEvent.type(getSearchBar, "Mangalore");
  searchIcon && fireEvent.click(searchIcon);
  getSearchBar && fireEvent.click(getSearchBar);
  const weatherDescCard = await screen.findByTestId("summaryCard");
  expect(weatherDescCard).toBeInTheDocument();
});

test("renders weather description page", async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let getById = queryByAttribute.bind(null, "id");
  const searchIcon = getById(container, "search-icon-button");
  const getSearchBar = screen.getByPlaceholderText("Search Location");
  searchIcon && userEvent.click(getSearchBar);
  userEvent.type(getSearchBar, "Mangalore");
  searchIcon && fireEvent.click(searchIcon);
  getSearchBar && fireEvent.click(getSearchBar);
  const weatherDescCard = await screen.findByTestId("summaryCard");
  expect(weatherDescCard).toBeInTheDocument();
  getById = queryByAttribute.bind(null, "id");
  const cityWeatherCardLink = getById(container, "navigate-desc");
  cityWeatherCardLink && cityWeatherCardLink.click();
  const getWeatherDesc = await screen.findByTestId("weather-desc");
  expect(getWeatherDesc).toBeInTheDocument();
});

test("renders added to list and remove button", async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let getById = queryByAttribute.bind(null, "id");
  const searchIcon = getById(container, "search-icon-button");
  const getSearchBar = screen.getByPlaceholderText("Search Location");
  searchIcon && userEvent.click(getSearchBar);
  userEvent.type(getSearchBar, "Mangalore");
  searchIcon && fireEvent.click(searchIcon);
  getSearchBar && fireEvent.click(getSearchBar);
  const weatherDescCard = await screen.findByTestId("card-test");
  expect(weatherDescCard).toBeInTheDocument();
  getById = queryByAttribute.bind(null, "id");
  const cityWeatherCardLink = getById(container, "navigate-desc");
  cityWeatherCardLink && cityWeatherCardLink.click();
  const getStupidDesc = await screen.findByTestId("weather-desc");
  expect(getStupidDesc).toBeInTheDocument();
  getById = queryByAttribute.bind(null, "id");
  const getaddtolist = getById(container, "addtolist");
  getaddtolist && getaddtolist.click();
  const addedbtn = screen.getByTestId("added-button");
  expect(addedbtn.innerHTML).toEqual("Added to list ");
});

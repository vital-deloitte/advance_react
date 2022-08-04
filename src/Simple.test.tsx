import { fireEvent, queryByAttribute, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

test("renders empty bookmarks or watchlist", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText("No locations added to watchlist");
  expect(linkElement).toBeInTheDocument();
});

test("renders the navbar", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement =
    screen.getByText("Weather Forecaster") && screen.getByAltText("icon");
  expect(linkElement).toBeInTheDocument();
});

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

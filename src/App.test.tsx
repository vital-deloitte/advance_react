import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import "jest-canvas-mock";
import configureMockStore from "redux-mock-store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import WeatherCardSummary from "./components/WeatherCardSummary/WeatherCardSummary";
import WeatherDescription from "./components/WeatherDescription/WeatherDescription";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

export const mockStore = configureMockStore([]);

const initialData = {
  search: {
    isTyping: true,
    searchContent: "Mangalore",
  },
  weatherDesc: {
    findCityAndDetails: {
      Mangalore: {
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        main: {
          temp: 296.63,
          feels_like: 297.64,
          temp_min: 296.63,
          temp_max: 296.63,
          pressure: 1007,
          humidity: 100,
        },
        dt: 1659678632,
        name: "Mangalore",
        sys: {
          type: 1,
          id: 9217,
          country: "IN",
          sunrise: 1659660411,
          sunset: 1659705967,
        },
        list: [
          {
            dt: 1659679200,
            main: {
              temp: 296.63,
              feels_like: 297.64,
              temp_min: 296.63,
              temp_max: 297.66,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 100,
              temp_kf: -1.03,
            },
            weather: [
              {
                id: 502,
                main: "Rain",
                description: "heavy intensity rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.83,
              deg: 249,
              gust: 15.4,
            },
            visibility: 4316,
            pop: 1,
            rain: {
              "3h": 25.96,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 06:00:00",
          },
          {
            dt: 1659690000,
            main: {
              temp: 297,
              feels_like: 297.97,
              temp_min: 297,
              temp_max: 297.73,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1003,
              humidity: 97,
              temp_kf: -0.73,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.87,
              deg: 258,
              gust: 15.01,
            },
            visibility: 4825,
            pop: 1,
            rain: {
              "3h": 10.14,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 09:00:00",
          },
          {
            dt: 1659700800,
            main: {
              temp: 297.6,
              feels_like: 298.5,
              temp_min: 297.6,
              temp_max: 298.08,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1003,
              humidity: 92,
              temp_kf: -0.48,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.25,
              deg: 260,
              gust: 14.29,
            },
            visibility: 8228,
            pop: 1,
            rain: {
              "3h": 5.97,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 12:00:00",
          },
          {
            dt: 1659711600,
            main: {
              temp: 298.21,
              feels_like: 299.04,
              temp_min: 298.21,
              temp_max: 298.21,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.09,
              deg: 264,
              gust: 12.78,
            },
            visibility: 8503,
            pop: 1,
            rain: {
              "3h": 3.2,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 15:00:00",
          },
          {
            dt: 1659722400,
            main: {
              temp: 298.08,
              feels_like: 298.9,
              temp_min: 298.08,
              temp_max: 298.08,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1005,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.58,
              deg: 257,
              gust: 11.27,
            },
            visibility: 8285,
            pop: 1,
            rain: {
              "3h": 3.63,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 18:00:00",
          },
          {
            dt: 1659733200,
            main: {
              temp: 298.16,
              feels_like: 298.99,
              temp_min: 298.16,
              temp_max: 298.16,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1003,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.2,
              deg: 264,
              gust: 10.82,
            },
            visibility: 8001,
            pop: 1,
            rain: {
              "3h": 3.39,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 21:00:00",
          },
          {
            dt: 1659744000,
            main: {
              temp: 298.35,
              feels_like: 299.22,
              temp_min: 298.35,
              temp_max: 298.35,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1003,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.6,
              deg: 258,
              gust: 11.02,
            },
            visibility: 5635,
            pop: 1,
            rain: {
              "3h": 5.73,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 00:00:00",
          },
          {
            dt: 1659754800,
            main: {
              temp: 299.07,
              feels_like: 299.99,
              temp_min: 299.07,
              temp_max: 299.07,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 95,
            },
            wind: {
              speed: 6.48,
              deg: 258,
              gust: 10.23,
            },
            visibility: 7633,
            pop: 1,
            rain: {
              "3h": 5.6,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 03:00:00",
          },
          {
            dt: 1659765600,
            main: {
              temp: 298.94,
              feels_like: 299.87,
              temp_min: 298.94,
              temp_max: 298.94,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 95,
            },
            wind: {
              speed: 6.5,
              deg: 258,
              gust: 10.22,
            },
            visibility: 8080,
            pop: 1,
            rain: {
              "3h": 4.39,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 06:00:00",
          },
          {
            dt: 1659776400,
            main: {
              temp: 299.01,
              feels_like: 299.95,
              temp_min: 299.01,
              temp_max: 299.01,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1003,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 96,
            },
            wind: {
              speed: 6.41,
              deg: 262,
              gust: 10.16,
            },
            visibility: 7704,
            pop: 1,
            rain: {
              "3h": 4.5,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 09:00:00",
          },
          {
            dt: 1659787200,
            main: {
              temp: 298.93,
              feels_like: 299.86,
              temp_min: 298.93,
              temp_max: 298.93,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1002,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 95,
            },
            wind: {
              speed: 6.46,
              deg: 262,
              gust: 10.67,
            },
            visibility: 8490,
            pop: 1,
            rain: {
              "3h": 4.34,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 12:00:00",
          },
          {
            dt: 1659798000,
            main: {
              temp: 298.62,
              feels_like: 299.55,
              temp_min: 298.62,
              temp_max: 298.62,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 91,
            },
            wind: {
              speed: 6.23,
              deg: 258,
              gust: 11.62,
            },
            visibility: 5420,
            pop: 1,
            rain: {
              "3h": 6.79,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 15:00:00",
          },
          {
            dt: 1659808800,
            main: {
              temp: 298.6,
              feels_like: 299.52,
              temp_min: 298.6,
              temp_max: 298.6,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 95,
            },
            wind: {
              speed: 6.24,
              deg: 257,
              gust: 11.22,
            },
            visibility: 9522,
            pop: 1,
            rain: {
              "3h": 5.87,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 18:00:00",
          },
          {
            dt: 1659819600,
            main: {
              temp: 298.36,
              feels_like: 299.26,
              temp_min: 298.36,
              temp_max: 298.36,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 94,
            },
            wind: {
              speed: 6.22,
              deg: 261,
              gust: 11.01,
            },
            visibility: 6470,
            pop: 1,
            rain: {
              "3h": 3.89,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 21:00:00",
          },
          {
            dt: 1659830400,
            main: {
              temp: 298.38,
              feels_like: 299.26,
              temp_min: 298.38,
              temp_max: 298.38,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 97,
            },
            wind: {
              speed: 5.98,
              deg: 268,
              gust: 10.77,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 3.12,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 00:00:00",
          },
          {
            dt: 1659841200,
            main: {
              temp: 299.16,
              feels_like: 299.16,
              temp_min: 299.16,
              temp_max: 299.16,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 5.89,
              deg: 270,
              gust: 9.91,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 3.63,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 03:00:00",
          },
          {
            dt: 1659852000,
            main: {
              temp: 299.94,
              feels_like: 302.76,
              temp_min: 299.94,
              temp_max: 299.94,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.48,
              deg: 270,
              gust: 9.65,
            },
            visibility: 7625,
            pop: 1,
            rain: {
              "3h": 4.25,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 06:00:00",
          },
          {
            dt: 1659862800,
            main: {
              temp: 299.98,
              feels_like: 302.77,
              temp_min: 299.98,
              temp_max: 299.98,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.61,
              deg: 267,
              gust: 9.41,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 4.67,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 09:00:00",
          },
          {
            dt: 1659873600,
            main: {
              temp: 299.09,
              feels_like: 300.04,
              temp_min: 299.09,
              temp_max: 299.09,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 5.56,
              deg: 265,
              gust: 9.09,
            },
            visibility: 7665,
            pop: 1,
            rain: {
              "3h": 4.44,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 12:00:00",
          },
          {
            dt: 1659884400,
            main: {
              temp: 298.25,
              feels_like: 299.14,
              temp_min: 298.25,
              temp_max: 298.25,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1003,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 5.75,
              deg: 265,
              gust: 9.83,
            },
            visibility: 5239,
            pop: 1,
            rain: {
              "3h": 6.36,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 15:00:00",
          },
          {
            dt: 1659895200,
            main: {
              temp: 298.46,
              feels_like: 299.37,
              temp_min: 298.46,
              temp_max: 298.46,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6,
              deg: 261,
              gust: 10.35,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 4.98,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 18:00:00",
          },
          {
            dt: 1659906000,
            main: {
              temp: 298.24,
              feels_like: 299.13,
              temp_min: 298.24,
              temp_max: 298.24,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.37,
              deg: 262,
              gust: 10.37,
            },
            visibility: 7145,
            pop: 1,
            rain: {
              "3h": 4.43,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 21:00:00",
          },
          {
            dt: 1659916800,
            main: {
              temp: 298.2,
              feels_like: 299.08,
              temp_min: 298.2,
              temp_max: 298.2,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 5.98,
              deg: 262,
              gust: 10.35,
            },
            visibility: 9856,
            pop: 1,
            rain: {
              "3h": 4.36,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 00:00:00",
          },
          {
            dt: 1659927600,
            main: {
              temp: 298.81,
              feels_like: 299.73,
              temp_min: 298.81,
              temp_max: 298.81,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.11,
              deg: 267,
              gust: 10.04,
            },
            visibility: 6101,
            pop: 1,
            rain: {
              "3h": 4.43,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 03:00:00",
          },
          {
            dt: 1659938400,
            main: {
              temp: 299.64,
              feels_like: 299.64,
              temp_min: 299.64,
              temp_max: 299.64,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 85,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.53,
              deg: 266,
              gust: 9.68,
            },
            visibility: 8684,
            pop: 1,
            rain: {
              "3h": 4.89,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 06:00:00",
          },
          {
            dt: 1659949200,
            main: {
              temp: 299.89,
              feels_like: 302.65,
              temp_min: 299.89,
              temp_max: 299.89,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.85,
              deg: 269,
              gust: 9.96,
            },
            visibility: 7380,
            pop: 1,
            rain: {
              "3h": 5,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 09:00:00",
          },
          {
            dt: 1659960000,
            main: {
              temp: 299.28,
              feels_like: 299.28,
              temp_min: 299.28,
              temp_max: 299.28,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 5.6,
              deg: 264,
              gust: 9.76,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 4.49,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 12:00:00",
          },
          {
            dt: 1659970800,
            main: {
              temp: 298.76,
              feels_like: 299.65,
              temp_min: 298.76,
              temp_max: 298.76,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1003,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.36,
              deg: 256,
              gust: 11.33,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 5.27,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 15:00:00",
          },
          {
            dt: 1659981600,
            main: {
              temp: 298.88,
              feels_like: 299.81,
              temp_min: 298.88,
              temp_max: 298.88,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.5,
              deg: 256,
              gust: 11.48,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 3.74,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 18:00:00",
          },
          {
            dt: 1659992400,
            main: {
              temp: 298.58,
              feels_like: 299.48,
              temp_min: 298.58,
              temp_max: 298.58,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.27,
              deg: 256,
              gust: 12.37,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 4.53,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 21:00:00",
          },
          {
            dt: 1660003200,
            main: {
              temp: 298.9,
              feels_like: 299.8,
              temp_min: 298.9,
              temp_max: 298.9,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.17,
              deg: 254,
              gust: 12,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 3.05,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 00:00:00",
          },
          {
            dt: 1660014000,
            main: {
              temp: 299.36,
              feels_like: 299.36,
              temp_min: 299.36,
              temp_max: 299.36,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1002,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.38,
              deg: 246,
              gust: 12.54,
            },
            visibility: 10000,
            pop: 0.97,
            rain: {
              "3h": 4.38,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 03:00:00",
          },
          {
            dt: 1660024800,
            main: {
              temp: 299.65,
              feels_like: 299.65,
              temp_min: 299.65,
              temp_max: 299.65,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 1003,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.08,
              deg: 253,
              gust: 12.56,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 5.32,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 06:00:00",
          },
          {
            dt: 1660035600,
            main: {
              temp: 299.69,
              feels_like: 299.69,
              temp_min: 299.69,
              temp_max: 299.69,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.04,
              deg: 254,
              gust: 13.02,
            },
            visibility: 5798,
            pop: 1,
            rain: {
              "3h": 5.39,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 09:00:00",
          },
          {
            dt: 1660046400,
            main: {
              temp: 299.16,
              feels_like: 299.16,
              temp_min: 299.16,
              temp_max: 299.16,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 85,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.49,
              deg: 257,
              gust: 14.14,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 5.89,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 12:00:00",
          },
          {
            dt: 1660057200,
            main: {
              temp: 298.97,
              feels_like: 299.77,
              temp_min: 298.97,
              temp_max: 298.97,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.05,
              deg: 254,
              gust: 14.53,
            },
            visibility: 9912,
            pop: 1,
            rain: {
              "3h": 5.23,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 15:00:00",
          },
          {
            dt: 1660068000,
            main: {
              temp: 299.02,
              feels_like: 299.83,
              temp_min: 299.02,
              temp_max: 299.02,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.06,
              deg: 255,
              gust: 14.36,
            },
            visibility: 5206,
            pop: 1,
            rain: {
              "3h": 5.11,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 18:00:00",
          },
          {
            dt: 1660078800,
            main: {
              temp: 298.81,
              feels_like: 299.62,
              temp_min: 298.81,
              temp_max: 298.81,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.5,
              deg: 258,
              gust: 13.89,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 5.46,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 21:00:00",
          },
          {
            dt: 1660089600,
            main: {
              temp: 298.42,
              feels_like: 299.25,
              temp_min: 298.42,
              temp_max: 298.42,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1000,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.35,
              deg: 246,
              gust: 13.47,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 6.12,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-10 00:00:00",
          },
          {
            dt: 1660100400,
            main: {
              temp: 299.27,
              feels_like: 299.27,
              temp_min: 299.27,
              temp_max: 299.27,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 1002,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.16,
              deg: 243,
              gust: 13.57,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              "3h": 4.84,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-10 03:00:00",
          },
        ],
      },
      Bengaluru: {
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        main: {
          temp: 295.92,
          feels_like: 296.26,
          temp_min: 295.89,
          temp_max: 297.05,
          pressure: 1010,
          humidity: 77,
        },
        dt: 1659678244,
        name: "Bengaluru",
        sys: {
          type: 2,
          id: 2040609,
          country: "IN",
          sunrise: 1659659750,
          sunset: 1659705323,
        },
        list: [
          {
            dt: 1659679200,
            main: {
              temp: 295.92,
              feels_like: 296.26,
              temp_min: 294.65,
              temp_max: 295.92,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 906,
              humidity: 77,
              temp_kf: 1.27,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.7,
              deg: 242,
              gust: 13.05,
            },
            visibility: 10000,
            pop: 0.29,
            rain: {
              "3h": 0.28,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 06:00:00",
          },
          {
            dt: 1659690000,
            main: {
              temp: 295.37,
              feels_like: 295.76,
              temp_min: 294.27,
              temp_max: 295.37,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 905,
              humidity: 81,
              temp_kf: 1.1,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.29,
              deg: 251,
              gust: 16.45,
            },
            visibility: 10000,
            pop: 0.67,
            rain: {
              "3h": 1.14,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 09:00:00",
          },
          {
            dt: 1659700800,
            main: {
              temp: 295.07,
              feels_like: 295.46,
              temp_min: 294.64,
              temp_max: 295.07,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 905,
              humidity: 82,
              temp_kf: 0.43,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 9.12,
              deg: 257,
              gust: 17.1,
            },
            visibility: 10000,
            pop: 0.58,
            rain: {
              "3h": 0.31,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 12:00:00",
          },
          {
            dt: 1659711600,
            main: {
              temp: 293.51,
              feels_like: 293.9,
              temp_min: 293.51,
              temp_max: 293.51,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 8.72,
              deg: 255,
              gust: 16.69,
            },
            visibility: 10000,
            pop: 0.39,
            rain: {
              "3h": 0.32,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 15:00:00",
          },
          {
            dt: 1659722400,
            main: {
              temp: 293.56,
              feels_like: 293.93,
              temp_min: 293.56,
              temp_max: 293.56,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 8.53,
              deg: 251,
              gust: 16.29,
            },
            visibility: 10000,
            pop: 0.13,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 18:00:00",
          },
          {
            dt: 1659733200,
            main: {
              temp: 293.28,
              feels_like: 293.62,
              temp_min: 293.28,
              temp_max: 293.28,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.07,
              deg: 258,
              gust: 16.03,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 21:00:00",
          },
          {
            dt: 1659744000,
            main: {
              temp: 293.21,
              feels_like: 293.62,
              temp_min: 293.21,
              temp_max: 293.21,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 90,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 8.09,
              deg: 255,
              gust: 15.07,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 00:00:00",
          },
          {
            dt: 1659754800,
            main: {
              temp: 294.23,
              feels_like: 294.59,
              temp_min: 294.23,
              temp_max: 294.23,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 7.83,
              deg: 257,
              gust: 14,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.14,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 03:00:00",
          },
          {
            dt: 1659765600,
            main: {
              temp: 296.28,
              feels_like: 296.63,
              temp_min: 296.28,
              temp_max: 296.28,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 9.44,
              deg: 257,
              gust: 14.46,
            },
            visibility: 10000,
            pop: 0.34,
            rain: {
              "3h": 0.3,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 06:00:00",
          },
          {
            dt: 1659776400,
            main: {
              temp: 297.23,
              feels_like: 297.55,
              temp_min: 297.23,
              temp_max: 297.23,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 71,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.71,
              deg: 259,
              gust: 14.16,
            },
            visibility: 10000,
            pop: 0.48,
            rain: {
              "3h": 0.29,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 09:00:00",
          },
          {
            dt: 1659787200,
            main: {
              temp: 295.32,
              feels_like: 295.68,
              temp_min: 295.32,
              temp_max: 295.32,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 80,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.5,
              deg: 254,
              gust: 13.87,
            },
            visibility: 10000,
            pop: 0.56,
            rain: {
              "3h": 0.27,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 12:00:00",
          },
          {
            dt: 1659798000,
            main: {
              temp: 294.06,
              feels_like: 294.48,
              temp_min: 294.06,
              temp_max: 294.06,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.27,
              deg: 252,
              gust: 13.95,
            },
            visibility: 10000,
            pop: 0.25,
            rain: {
              "3h": 0.16,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 15:00:00",
          },
          {
            dt: 1659808800,
            main: {
              temp: 293.76,
              feels_like: 294.17,
              temp_min: 293.76,
              temp_max: 293.76,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.44,
              deg: 257,
              gust: 13.94,
            },
            visibility: 10000,
            pop: 0.22,
            rain: {
              "3h": 0.2,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 18:00:00",
          },
          {
            dt: 1659819600,
            main: {
              temp: 293.35,
              feels_like: 293.7,
              temp_min: 293.35,
              temp_max: 293.35,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.49,
              deg: 260,
              gust: 15.24,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.17,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 21:00:00",
          },
          {
            dt: 1659830400,
            main: {
              temp: 292.96,
              feels_like: 293.29,
              temp_min: 292.96,
              temp_max: 292.96,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.72,
              deg: 261,
              gust: 13.93,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 00:00:00",
          },
          {
            dt: 1659841200,
            main: {
              temp: 293.59,
              feels_like: 293.96,
              temp_min: 293.59,
              temp_max: 293.59,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.65,
              deg: 258,
              gust: 13.14,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 03:00:00",
          },
          {
            dt: 1659852000,
            main: {
              temp: 296.04,
              feels_like: 296.37,
              temp_min: 296.04,
              temp_max: 296.04,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 906,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.55,
              deg: 262,
              gust: 12.18,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.17,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 06:00:00",
          },
          {
            dt: 1659862800,
            main: {
              temp: 298.14,
              feels_like: 298.42,
              temp_min: 298.14,
              temp_max: 298.14,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 905,
              humidity: 66,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.79,
              deg: 265,
              gust: 11.65,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.16,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 09:00:00",
          },
          {
            dt: 1659873600,
            main: {
              temp: 296.68,
              feels_like: 296.97,
              temp_min: 296.68,
              temp_max: 296.68,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 905,
              humidity: 72,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.07,
              deg: 263,
              gust: 11.9,
            },
            visibility: 10000,
            pop: 0.22,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 12:00:00",
          },
          {
            dt: 1659884400,
            main: {
              temp: 294.48,
              feels_like: 294.78,
              temp_min: 294.48,
              temp_max: 294.48,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 81,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 7.76,
              deg: 260,
              gust: 13.21,
            },
            visibility: 10000,
            pop: 0.07,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 15:00:00",
          },
          {
            dt: 1659895200,
            main: {
              temp: 293.63,
              feels_like: 293.98,
              temp_min: 293.63,
              temp_max: 293.63,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.56,
              deg: 252,
              gust: 12.87,
            },
            visibility: 10000,
            pop: 0.04,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 18:00:00",
          },
          {
            dt: 1659906000,
            main: {
              temp: 292.98,
              feels_like: 293.37,
              temp_min: 292.98,
              temp_max: 292.98,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 90,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.36,
              deg: 249,
              gust: 14.37,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 21:00:00",
          },
          {
            dt: 1659916800,
            main: {
              temp: 292.81,
              feels_like: 293.18,
              temp_min: 292.81,
              temp_max: 292.81,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 90,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 6.92,
              deg: 252,
              gust: 13.91,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 00:00:00",
          },
          {
            dt: 1659927600,
            main: {
              temp: 294.36,
              feels_like: 294.7,
              temp_min: 294.36,
              temp_max: 294.36,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 906,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.81,
              deg: 254,
              gust: 13.54,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 03:00:00",
          },
          {
            dt: 1659938400,
            main: {
              temp: 296.9,
              feels_like: 297.13,
              temp_min: 296.9,
              temp_max: 296.9,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 906,
              humidity: 69,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.59,
              deg: 265,
              gust: 14.06,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.17,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 06:00:00",
          },
          {
            dt: 1659949200,
            main: {
              temp: 296.56,
              feels_like: 296.84,
              temp_min: 296.56,
              temp_max: 296.56,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 904,
              humidity: 72,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.07,
              deg: 268,
              gust: 14.22,
            },
            visibility: 10000,
            pop: 0.03,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 09:00:00",
          },
          {
            dt: 1659960000,
            main: {
              temp: 295.4,
              feels_like: 295.72,
              temp_min: 295.4,
              temp_max: 295.4,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 78,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.19,
              deg: 263,
              gust: 14.03,
            },
            visibility: 10000,
            pop: 0.16,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 12:00:00",
          },
          {
            dt: 1659970800,
            main: {
              temp: 294.19,
              feels_like: 294.52,
              temp_min: 294.19,
              temp_max: 294.19,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.14,
              deg: 258,
              gust: 15.02,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 15:00:00",
          },
          {
            dt: 1659981600,
            main: {
              temp: 293.37,
              feels_like: 293.69,
              temp_min: 293.37,
              temp_max: 293.37,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.79,
              deg: 252,
              gust: 15.51,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 18:00:00",
          },
          {
            dt: 1659992400,
            main: {
              temp: 292.89,
              feels_like: 293.22,
              temp_min: 292.89,
              temp_max: 292.89,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.61,
              deg: 243,
              gust: 15.84,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 21:00:00",
          },
          {
            dt: 1660003200,
            main: {
              temp: 292.79,
              feels_like: 293.08,
              temp_min: 292.79,
              temp_max: 292.79,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 903,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 7.96,
              deg: 242,
              gust: 16.1,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 00:00:00",
          },
          {
            dt: 1660014000,
            main: {
              temp: 293.66,
              feels_like: 293.96,
              temp_min: 293.66,
              temp_max: 293.66,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.34,
              deg: 249,
              gust: 16.03,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 03:00:00",
          },
          {
            dt: 1660024800,
            main: {
              temp: 296.64,
              feels_like: 296.85,
              temp_min: 296.64,
              temp_max: 296.64,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 69,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.81,
              deg: 261,
              gust: 17.21,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 06:00:00",
          },
          {
            dt: 1660035600,
            main: {
              temp: 297.09,
              feels_like: 297.34,
              temp_min: 297.09,
              temp_max: 297.09,
              pressure: 1002,
              sea_level: 1002,
              grnd_level: 903,
              humidity: 69,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 10.52,
              deg: 257,
              gust: 17.91,
            },
            visibility: 10000,
            pop: 0.25,
            rain: {
              "3h": 0.21,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 09:00:00",
          },
          {
            dt: 1660046400,
            main: {
              temp: 295.2,
              feels_like: 295.45,
              temp_min: 295.2,
              temp_max: 295.2,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 903,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.75,
              deg: 259,
              gust: 17.94,
            },
            visibility: 10000,
            pop: 0.39,
            rain: {
              "3h": 0.32,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 12:00:00",
          },
          {
            dt: 1660057200,
            main: {
              temp: 293.92,
              feels_like: 294.12,
              temp_min: 293.92,
              temp_max: 293.92,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 903,
              humidity: 79,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 10.3,
              deg: 254,
              gust: 18.73,
            },
            visibility: 10000,
            pop: 0.24,
            rain: {
              "3h": 0.14,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 15:00:00",
          },
          {
            dt: 1660068000,
            main: {
              temp: 293.17,
              feels_like: 293.29,
              temp_min: 293.17,
              temp_max: 293.17,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 904,
              humidity: 79,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 9.71,
              deg: 250,
              gust: 19.54,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 18:00:00",
          },
          {
            dt: 1660078800,
            main: {
              temp: 293.01,
              feels_like: 293.19,
              temp_min: 293.01,
              temp_max: 293.01,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 902,
              humidity: 82,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.47,
              deg: 247,
              gust: 18.21,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 21:00:00",
          },
          {
            dt: 1660089600,
            main: {
              temp: 292.72,
              feels_like: 292.93,
              temp_min: 292.72,
              temp_max: 292.72,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 902,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.2,
              deg: 235,
              gust: 18.18,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.12,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-10 00:00:00",
          },
          {
            dt: 1660100400,
            main: {
              temp: 292.47,
              feels_like: 292.73,
              temp_min: 292.47,
              temp_max: 292.47,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 903,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 8.13,
              deg: 225,
              gust: 17.57,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-10 03:00:00",
          },
        ],
      },
    },
    bookMarks: ["Mangalore"],
  },
};

const store = mockStore(initialData);

// global.window = Object.create(window);
// const defineUrl = (url: string) => {
//   Object.defineProperty(window, "location", {
//     value: {
//       href: url,
//     },
//     writable: true,
//   });
// };

test("search city in the search component", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const result = screen.getByPlaceholderText(
    "Search Location"
  ) as HTMLInputElement;
  expect(result.value).toEqual("Mangalore");
});

test("weather card summary", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <WeatherCardSummary />
      </BrowserRouter>
    </Provider>
  );

  const getCard = await screen.findByTestId("summaryCard");
  expect(getCard).toBeInTheDocument();
  const getCityName = await screen.findByText("Mangalore");
  expect(getCityName).toBeInTheDocument();
});

test("weather description", () => {
  const store = mockStore({
    weatherDesc: {
      findCityAndDetails: {
        Mangalore: {
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          main: {
            temp: 296.63,
            feels_like: 297.64,
            temp_min: 296.63,
            temp_max: 296.63,
            pressure: 1007,
            humidity: 100,
          },
          dt: 1659678632,
          name: "Mangalore",
          sys: {
            type: 1,
            id: 9217,
            country: "IN",
            sunrise: 1659660411,
            sunset: 1659705967,
          },
          list: [
            {
              dt: 1659679200,
              main: {
                temp: 296.63,
                feels_like: 297.64,
                temp_min: 296.63,
                temp_max: 297.66,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 100,
                temp_kf: -1.03,
              },
              weather: [
                {
                  id: 502,
                  main: "Rain",
                  description: "heavy intensity rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.83,
                deg: 249,
                gust: 15.4,
              },
              visibility: 4316,
              pop: 1,
              rain: {
                "3h": 25.96,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-05 06:00:00",
            },
            {
              dt: 1659690000,
              main: {
                temp: 297,
                feels_like: 297.97,
                temp_min: 297,
                temp_max: 297.73,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1003,
                humidity: 97,
                temp_kf: -0.73,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.87,
                deg: 258,
                gust: 15.01,
              },
              visibility: 4825,
              pop: 1,
              rain: {
                "3h": 10.14,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-05 09:00:00",
            },
            {
              dt: 1659700800,
              main: {
                temp: 297.6,
                feels_like: 298.5,
                temp_min: 297.6,
                temp_max: 298.08,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1003,
                humidity: 92,
                temp_kf: -0.48,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.25,
                deg: 260,
                gust: 14.29,
              },
              visibility: 8228,
              pop: 1,
              rain: {
                "3h": 5.97,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-05 12:00:00",
            },
            {
              dt: 1659711600,
              main: {
                temp: 298.21,
                feels_like: 299.04,
                temp_min: 298.21,
                temp_max: 298.21,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1005,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 7.09,
                deg: 264,
                gust: 12.78,
              },
              visibility: 8503,
              pop: 1,
              rain: {
                "3h": 3.2,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-05 15:00:00",
            },
            {
              dt: 1659722400,
              main: {
                temp: 298.08,
                feels_like: 298.9,
                temp_min: 298.08,
                temp_max: 298.08,
                pressure: 1009,
                sea_level: 1009,
                grnd_level: 1005,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.58,
                deg: 257,
                gust: 11.27,
              },
              visibility: 8285,
              pop: 1,
              rain: {
                "3h": 3.63,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-05 18:00:00",
            },
            {
              dt: 1659733200,
              main: {
                temp: 298.16,
                feels_like: 298.99,
                temp_min: 298.16,
                temp_max: 298.16,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1003,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.2,
                deg: 264,
                gust: 10.82,
              },
              visibility: 8001,
              pop: 1,
              rain: {
                "3h": 3.39,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-05 21:00:00",
            },
            {
              dt: 1659744000,
              main: {
                temp: 298.35,
                feels_like: 299.22,
                temp_min: 298.35,
                temp_max: 298.35,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1003,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.6,
                deg: 258,
                gust: 11.02,
              },
              visibility: 5635,
              pop: 1,
              rain: {
                "3h": 5.73,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-06 00:00:00",
            },
            {
              dt: 1659754800,
              main: {
                temp: 299.07,
                feels_like: 299.99,
                temp_min: 299.07,
                temp_max: 299.07,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1005,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 95,
              },
              wind: {
                speed: 6.48,
                deg: 258,
                gust: 10.23,
              },
              visibility: 7633,
              pop: 1,
              rain: {
                "3h": 5.6,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-06 03:00:00",
            },
            {
              dt: 1659765600,
              main: {
                temp: 298.94,
                feels_like: 299.87,
                temp_min: 298.94,
                temp_max: 298.94,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1005,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 95,
              },
              wind: {
                speed: 6.5,
                deg: 258,
                gust: 10.22,
              },
              visibility: 8080,
              pop: 1,
              rain: {
                "3h": 4.39,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-06 06:00:00",
            },
            {
              dt: 1659776400,
              main: {
                temp: 299.01,
                feels_like: 299.95,
                temp_min: 299.01,
                temp_max: 299.01,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1003,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 96,
              },
              wind: {
                speed: 6.41,
                deg: 262,
                gust: 10.16,
              },
              visibility: 7704,
              pop: 1,
              rain: {
                "3h": 4.5,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-06 09:00:00",
            },
            {
              dt: 1659787200,
              main: {
                temp: 298.93,
                feels_like: 299.86,
                temp_min: 298.93,
                temp_max: 298.93,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1002,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 95,
              },
              wind: {
                speed: 6.46,
                deg: 262,
                gust: 10.67,
              },
              visibility: 8490,
              pop: 1,
              rain: {
                "3h": 4.34,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-06 12:00:00",
            },
            {
              dt: 1659798000,
              main: {
                temp: 298.62,
                feels_like: 299.55,
                temp_min: 298.62,
                temp_max: 298.62,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 91,
              },
              wind: {
                speed: 6.23,
                deg: 258,
                gust: 11.62,
              },
              visibility: 5420,
              pop: 1,
              rain: {
                "3h": 6.79,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-06 15:00:00",
            },
            {
              dt: 1659808800,
              main: {
                temp: 298.6,
                feels_like: 299.52,
                temp_min: 298.6,
                temp_max: 298.6,
                pressure: 1008,
                sea_level: 1008,
                grnd_level: 1005,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 95,
              },
              wind: {
                speed: 6.24,
                deg: 257,
                gust: 11.22,
              },
              visibility: 9522,
              pop: 1,
              rain: {
                "3h": 5.87,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-06 18:00:00",
            },
            {
              dt: 1659819600,
              main: {
                temp: 298.36,
                feels_like: 299.26,
                temp_min: 298.36,
                temp_max: 298.36,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 94,
              },
              wind: {
                speed: 6.22,
                deg: 261,
                gust: 11.01,
              },
              visibility: 6470,
              pop: 1,
              rain: {
                "3h": 3.89,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-06 21:00:00",
            },
            {
              dt: 1659830400,
              main: {
                temp: 298.38,
                feels_like: 299.26,
                temp_min: 298.38,
                temp_max: 298.38,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 97,
              },
              wind: {
                speed: 5.98,
                deg: 268,
                gust: 10.77,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 3.12,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-07 00:00:00",
            },
            {
              dt: 1659841200,
              main: {
                temp: 299.16,
                feels_like: 299.16,
                temp_min: 299.16,
                temp_max: 299.16,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 86,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 5.89,
                deg: 270,
                gust: 9.91,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 3.63,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-07 03:00:00",
            },
            {
              dt: 1659852000,
              main: {
                temp: 299.94,
                feels_like: 302.76,
                temp_min: 299.94,
                temp_max: 299.94,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 84,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.48,
                deg: 270,
                gust: 9.65,
              },
              visibility: 7625,
              pop: 1,
              rain: {
                "3h": 4.25,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-07 06:00:00",
            },
            {
              dt: 1659862800,
              main: {
                temp: 299.98,
                feels_like: 302.77,
                temp_min: 299.98,
                temp_max: 299.98,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 83,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.61,
                deg: 267,
                gust: 9.41,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 4.67,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-07 09:00:00",
            },
            {
              dt: 1659873600,
              main: {
                temp: 299.09,
                feels_like: 300.04,
                temp_min: 299.09,
                temp_max: 299.09,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 5.56,
                deg: 265,
                gust: 9.09,
              },
              visibility: 7665,
              pop: 1,
              rain: {
                "3h": 4.44,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-07 12:00:00",
            },
            {
              dt: 1659884400,
              main: {
                temp: 298.25,
                feels_like: 299.14,
                temp_min: 298.25,
                temp_max: 298.25,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1003,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 5.75,
                deg: 265,
                gust: 9.83,
              },
              visibility: 5239,
              pop: 1,
              rain: {
                "3h": 6.36,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-07 15:00:00",
            },
            {
              dt: 1659895200,
              main: {
                temp: 298.46,
                feels_like: 299.37,
                temp_min: 298.46,
                temp_max: 298.46,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6,
                deg: 261,
                gust: 10.35,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 4.98,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-07 18:00:00",
            },
            {
              dt: 1659906000,
              main: {
                temp: 298.24,
                feels_like: 299.13,
                temp_min: 298.24,
                temp_max: 298.24,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.37,
                deg: 262,
                gust: 10.37,
              },
              visibility: 7145,
              pop: 1,
              rain: {
                "3h": 4.43,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-07 21:00:00",
            },
            {
              dt: 1659916800,
              main: {
                temp: 298.2,
                feels_like: 299.08,
                temp_min: 298.2,
                temp_max: 298.2,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 89,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 5.98,
                deg: 262,
                gust: 10.35,
              },
              visibility: 9856,
              pop: 1,
              rain: {
                "3h": 4.36,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-08 00:00:00",
            },
            {
              dt: 1659927600,
              main: {
                temp: 298.81,
                feels_like: 299.73,
                temp_min: 298.81,
                temp_max: 298.81,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.11,
                deg: 267,
                gust: 10.04,
              },
              visibility: 6101,
              pop: 1,
              rain: {
                "3h": 4.43,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-08 03:00:00",
            },
            {
              dt: 1659938400,
              main: {
                temp: 299.64,
                feels_like: 299.64,
                temp_min: 299.64,
                temp_max: 299.64,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 85,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.53,
                deg: 266,
                gust: 9.68,
              },
              visibility: 8684,
              pop: 1,
              rain: {
                "3h": 4.89,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-08 06:00:00",
            },
            {
              dt: 1659949200,
              main: {
                temp: 299.89,
                feels_like: 302.65,
                temp_min: 299.89,
                temp_max: 299.89,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 84,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.85,
                deg: 269,
                gust: 9.96,
              },
              visibility: 7380,
              pop: 1,
              rain: {
                "3h": 5,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-08 09:00:00",
            },
            {
              dt: 1659960000,
              main: {
                temp: 299.28,
                feels_like: 299.28,
                temp_min: 299.28,
                temp_max: 299.28,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 86,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 5.6,
                deg: 264,
                gust: 9.76,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 4.49,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-08 12:00:00",
            },
            {
              dt: 1659970800,
              main: {
                temp: 298.76,
                feels_like: 299.65,
                temp_min: 298.76,
                temp_max: 298.76,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1003,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.36,
                deg: 256,
                gust: 11.33,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 5.27,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-08 15:00:00",
            },
            {
              dt: 1659981600,
              main: {
                temp: 298.88,
                feels_like: 299.81,
                temp_min: 298.88,
                temp_max: 298.88,
                pressure: 1007,
                sea_level: 1007,
                grnd_level: 1004,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 6.5,
                deg: 256,
                gust: 11.48,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 3.74,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-08 18:00:00",
            },
            {
              dt: 1659992400,
              main: {
                temp: 298.58,
                feels_like: 299.48,
                temp_min: 298.58,
                temp_max: 298.58,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1001,
                humidity: 88,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 7.27,
                deg: 256,
                gust: 12.37,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 4.53,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-08 21:00:00",
            },
            {
              dt: 1660003200,
              main: {
                temp: 298.9,
                feels_like: 299.8,
                temp_min: 298.9,
                temp_max: 298.9,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1001,
                humidity: 87,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 7.17,
                deg: 254,
                gust: 12,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 3.05,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-09 00:00:00",
            },
            {
              dt: 1660014000,
              main: {
                temp: 299.36,
                feels_like: 299.36,
                temp_min: 299.36,
                temp_max: 299.36,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1002,
                humidity: 86,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 7.38,
                deg: 246,
                gust: 12.54,
              },
              visibility: 10000,
              pop: 0.97,
              rain: {
                "3h": 4.38,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-09 03:00:00",
            },
            {
              dt: 1660024800,
              main: {
                temp: 299.65,
                feels_like: 299.65,
                temp_min: 299.65,
                temp_max: 299.65,
                pressure: 1006,
                sea_level: 1006,
                grnd_level: 1003,
                humidity: 84,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.08,
                deg: 253,
                gust: 12.56,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 5.32,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-09 06:00:00",
            },
            {
              dt: 1660035600,
              main: {
                temp: 299.69,
                feels_like: 299.69,
                temp_min: 299.69,
                temp_max: 299.69,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1001,
                humidity: 84,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.04,
                deg: 254,
                gust: 13.02,
              },
              visibility: 5798,
              pop: 1,
              rain: {
                "3h": 5.39,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-09 09:00:00",
            },
            {
              dt: 1660046400,
              main: {
                temp: 299.16,
                feels_like: 299.16,
                temp_min: 299.16,
                temp_max: 299.16,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1001,
                humidity: 85,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.49,
                deg: 257,
                gust: 14.14,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 5.89,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-09 12:00:00",
            },
            {
              dt: 1660057200,
              main: {
                temp: 298.97,
                feels_like: 299.77,
                temp_min: 298.97,
                temp_max: 298.97,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 83,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 9.05,
                deg: 254,
                gust: 14.53,
              },
              visibility: 9912,
              pop: 1,
              rain: {
                "3h": 5.23,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-09 15:00:00",
            },
            {
              dt: 1660068000,
              main: {
                temp: 299.02,
                feels_like: 299.83,
                temp_min: 299.02,
                temp_max: 299.02,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 83,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 9.06,
                deg: 255,
                gust: 14.36,
              },
              visibility: 5206,
              pop: 1,
              rain: {
                "3h": 5.11,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-09 18:00:00",
            },
            {
              dt: 1660078800,
              main: {
                temp: 298.81,
                feels_like: 299.62,
                temp_min: 298.81,
                temp_max: 298.81,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1001,
                humidity: 84,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.5,
                deg: 258,
                gust: 13.89,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 5.46,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-09 21:00:00",
            },
            {
              dt: 1660089600,
              main: {
                temp: 298.42,
                feels_like: 299.25,
                temp_min: 298.42,
                temp_max: 298.42,
                pressure: 1004,
                sea_level: 1004,
                grnd_level: 1000,
                humidity: 86,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10n",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 7.35,
                deg: 246,
                gust: 13.47,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 6.12,
              },
              sys: {
                pod: "n",
              },
              dt_txt: "2022-08-10 00:00:00",
            },
            {
              dt: 1660100400,
              main: {
                temp: 299.27,
                feels_like: 299.27,
                temp_min: 299.27,
                temp_max: 299.27,
                pressure: 1005,
                sea_level: 1005,
                grnd_level: 1002,
                humidity: 86,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 501,
                  main: "Rain",
                  description: "moderate rain",
                  icon: "10d",
                },
              ],
              clouds: {
                all: 100,
              },
              wind: {
                speed: 8.16,
                deg: 243,
                gust: 13.57,
              },
              visibility: 10000,
              pop: 1,
              rain: {
                "3h": 4.84,
              },
              sys: {
                pod: "d",
              },
              dt_txt: "2022-08-10 03:00:00",
            },
          ],
        },
      },
      bookMarks: [],
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter
        initialEntries={[
          { pathname: "/Mangalore", search: "?value=teresa_teng" },
        ]}
      >
        <WeatherDescription />
      </MemoryRouter>
    </Provider>
  );
});

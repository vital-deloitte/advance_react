import React from "react";
import {
  fireEvent,
  queryByAttribute,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";
import configureMockStore from "redux-mock-store";

export const mockStore = configureMockStore([]);

const customStore = {
  search: {
    isTyping: false,
    searchContent: "",
  },
  weatherDesc: {
    findCityAndDetails: {
      Mangalore: {
        weather: [
          {
            id: 701,
            main: "Mist",
            description: "mist",
            icon: "50d",
          },
        ],
        main: {
          temp: 297.63,
          feels_like: 298.59,
          temp_min: 297.63,
          temp_max: 297.63,
          pressure: 1007,
          humidity: 94,
        },
        dt: 1659674594,
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
              temp: 297.63,
              feels_like: 298.59,
              temp_min: 297.63,
              temp_max: 297.66,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 94,
              temp_kf: -0.03,
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
              temp: 297.66,
              feels_like: 298.59,
              temp_min: 297.66,
              temp_max: 297.73,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1003,
              humidity: 93,
              temp_kf: -0.07,
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
              temp: 297.93,
              feels_like: 298.81,
              temp_min: 297.93,
              temp_max: 298.08,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1003,
              humidity: 90,
              temp_kf: -0.15,
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
          feels_like: 296.16,
          temp_min: 295.89,
          temp_max: 296.05,
          pressure: 1011,
          humidity: 73,
        },
        dt: 1659674739,
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
              feels_like: 296.16,
              temp_min: 294.25,
              temp_max: 295.92,
              pressure: 1011,
              sea_level: 1011,
              grnd_level: 906,
              humidity: 73,
              temp_kf: 1.67,
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
              speed: 7.55,
              deg: 246,
              gust: 15.78,
            },
            visibility: 10000,
            pop: 0.24,
            rain: {
              "3h": 0.24,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 06:00:00",
          },
          {
            dt: 1659690000,
            main: {
              temp: 295.55,
              feels_like: 295.86,
              temp_min: 294.81,
              temp_max: 295.55,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 905,
              humidity: 77,
              temp_kf: 0.74,
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
              speed: 9.54,
              deg: 256,
              gust: 17.5,
            },
            visibility: 10000,
            pop: 0.74,
            rain: {
              "3h": 0.76,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 09:00:00",
          },
          {
            dt: 1659700800,
            main: {
              temp: 294.93,
              feels_like: 295.23,
              temp_min: 294.44,
              temp_max: 294.93,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 905,
              humidity: 79,
              temp_kf: 0.49,
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
              speed: 9.25,
              deg: 256,
              gust: 17.73,
            },
            visibility: 10000,
            pop: 0.58,
            rain: {
              "3h": 0.11,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-05 12:00:00",
          },
          {
            dt: 1659711600,
            main: {
              temp: 293.62,
              feels_like: 293.94,
              temp_min: 293.62,
              temp_max: 293.62,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 85,
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
              all: 98,
            },
            wind: {
              speed: 9.25,
              deg: 255,
              gust: 17.64,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 15:00:00",
          },
          {
            dt: 1659722400,
            main: {
              temp: 293.5,
              feels_like: 293.84,
              temp_min: 293.5,
              temp_max: 293.5,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 906,
              humidity: 86,
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
              speed: 8.9,
              deg: 257,
              gust: 16.68,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.13,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-05 18:00:00",
          },
          {
            dt: 1659733200,
            main: {
              temp: 292.95,
              feels_like: 293.28,
              temp_min: 292.95,
              temp_max: 292.95,
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
              all: 99,
            },
            wind: {
              speed: 8.24,
              deg: 254,
              gust: 16.13,
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
              speed: 8.18,
              deg: 254,
              gust: 15.31,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.11,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 00:00:00",
          },
          {
            dt: 1659754800,
            main: {
              temp: 293.33,
              feels_like: 293.73,
              temp_min: 293.33,
              temp_max: 293.33,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 89,
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
              speed: 7.38,
              deg: 253,
              gust: 14.55,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.17,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 03:00:00",
          },
          {
            dt: 1659765600,
            main: {
              temp: 294.24,
              feels_like: 294.65,
              temp_min: 294.24,
              temp_max: 294.24,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 907,
              humidity: 86,
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
              speed: 8.27,
              deg: 251,
              gust: 14.54,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.22,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 06:00:00",
          },
          {
            dt: 1659776400,
            main: {
              temp: 296.38,
              feels_like: 296.72,
              temp_min: 296.38,
              temp_max: 296.38,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 75,
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
              all: 98,
            },
            wind: {
              speed: 9.37,
              deg: 259,
              gust: 14.45,
            },
            visibility: 10000,
            pop: 0.56,
            rain: {
              "3h": 0.43,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 09:00:00",
          },
          {
            dt: 1659787200,
            main: {
              temp: 295.25,
              feels_like: 295.63,
              temp_min: 295.25,
              temp_max: 295.25,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 81,
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
              all: 98,
            },
            wind: {
              speed: 8.16,
              deg: 258,
              gust: 13.91,
            },
            visibility: 10000,
            pop: 0.48,
            rain: {
              "3h": 0.21,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-06 12:00:00",
          },
          {
            dt: 1659798000,
            main: {
              temp: 293.85,
              feels_like: 294.25,
              temp_min: 293.85,
              temp_max: 293.85,
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
              all: 98,
            },
            wind: {
              speed: 7.17,
              deg: 254,
              gust: 13.88,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.17,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 15:00:00",
          },
          {
            dt: 1659808800,
            main: {
              temp: 293.44,
              feels_like: 293.8,
              temp_min: 293.44,
              temp_max: 293.44,
              pressure: 1008,
              sea_level: 1008,
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
              all: 99,
            },
            wind: {
              speed: 7.73,
              deg: 258,
              gust: 14.39,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.12,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 18:00:00",
          },
          {
            dt: 1659819600,
            main: {
              temp: 293,
              feels_like: 293.31,
              temp_min: 293,
              temp_max: 293,
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
              all: 97,
            },
            wind: {
              speed: 7.85,
              deg: 261,
              gust: 15.21,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.11,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-06 21:00:00",
          },
          {
            dt: 1659830400,
            main: {
              temp: 292.75,
              feels_like: 293.06,
              temp_min: 292.75,
              temp_max: 292.75,
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
              all: 98,
            },
            wind: {
              speed: 7.01,
              deg: 260,
              gust: 14.07,
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
              temp: 293.37,
              feels_like: 293.75,
              temp_min: 293.37,
              temp_max: 293.37,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 88,
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
              speed: 6.6,
              deg: 253,
              gust: 12.9,
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
              temp: 296.97,
              feels_like: 297.24,
              temp_min: 296.97,
              temp_max: 296.97,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 907,
              humidity: 70,
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
              speed: 8.91,
              deg: 262,
              gust: 12.41,
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
              temp: 298.42,
              feels_like: 298.67,
              temp_min: 298.42,
              temp_max: 298.42,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 905,
              humidity: 64,
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
              speed: 8.98,
              deg: 263,
              gust: 11.88,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.13,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 09:00:00",
          },
          {
            dt: 1659873600,
            main: {
              temp: 297.36,
              feels_like: 297.66,
              temp_min: 297.36,
              temp_max: 297.36,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 905,
              humidity: 70,
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
              all: 98,
            },
            wind: {
              speed: 8.46,
              deg: 263,
              gust: 12.28,
            },
            visibility: 10000,
            pop: 0.48,
            rain: {
              "3h": 0.41,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-07 12:00:00",
          },
          {
            dt: 1659884400,
            main: {
              temp: 294.57,
              feels_like: 294.88,
              temp_min: 294.57,
              temp_max: 294.57,
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
              all: 100,
            },
            wind: {
              speed: 7.44,
              deg: 258,
              gust: 13.12,
            },
            visibility: 10000,
            pop: 0.04,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 15:00:00",
          },
          {
            dt: 1659895200,
            main: {
              temp: 293.44,
              feels_like: 293.82,
              temp_min: 293.44,
              temp_max: 293.44,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
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
              speed: 7,
              deg: 248,
              gust: 13.53,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-07 18:00:00",
          },
          {
            dt: 1659906000,
            main: {
              temp: 293.01,
              feels_like: 293.4,
              temp_min: 293.01,
              temp_max: 293.01,
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
              speed: 6.79,
              deg: 249,
              gust: 13.71,
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
              temp: 293.05,
              feels_like: 293.42,
              temp_min: 293.05,
              temp_max: 293.05,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 89,
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
              speed: 6.93,
              deg: 253,
              gust: 13.73,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.12,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 00:00:00",
          },
          {
            dt: 1659927600,
            main: {
              temp: 293.43,
              feels_like: 293.81,
              temp_min: 293.43,
              temp_max: 293.43,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 906,
              humidity: 88,
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
              speed: 7.23,
              deg: 251,
              gust: 13.89,
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
              temp: 296.91,
              feels_like: 297.17,
              temp_min: 296.91,
              temp_max: 296.91,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 906,
              humidity: 70,
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
              speed: 9.51,
              deg: 264,
              gust: 14.1,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.2,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 06:00:00",
          },
          {
            dt: 1659949200,
            main: {
              temp: 298.56,
              feels_like: 298.8,
              temp_min: 298.56,
              temp_max: 298.56,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 904,
              humidity: 63,
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
              speed: 10.3,
              deg: 267,
              gust: 14.32,
            },
            visibility: 10000,
            pop: 0.31,
            rain: {
              "3h": 0.11,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 09:00:00",
          },
          {
            dt: 1659960000,
            main: {
              temp: 296.69,
              feels_like: 296.98,
              temp_min: 296.69,
              temp_max: 296.69,
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
              speed: 8.86,
              deg: 265,
              gust: 14.45,
            },
            visibility: 10000,
            pop: 0.28,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-08 12:00:00",
          },
          {
            dt: 1659970800,
            main: {
              temp: 294.56,
              feels_like: 294.85,
              temp_min: 294.56,
              temp_max: 294.56,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 80,
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
              speed: 8.24,
              deg: 262,
              gust: 14.99,
            },
            visibility: 10000,
            pop: 0.11,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 15:00:00",
          },
          {
            dt: 1659981600,
            main: {
              temp: 293.61,
              feels_like: 293.9,
              temp_min: 293.61,
              temp_max: 293.61,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 84,
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
              speed: 8.74,
              deg: 256,
              gust: 16.17,
            },
            visibility: 10000,
            pop: 0.04,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-08 18:00:00",
          },
          {
            dt: 1659992400,
            main: {
              temp: 293.27,
              feels_like: 293.58,
              temp_min: 293.27,
              temp_max: 293.27,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 903,
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
              speed: 8.36,
              deg: 249,
              gust: 16.18,
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
              temp: 292.76,
              feels_like: 293.02,
              temp_min: 292.76,
              temp_max: 292.76,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 903,
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
              speed: 8.2,
              deg: 245,
              gust: 16.57,
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
              temp: 294.12,
              feels_like: 294.39,
              temp_min: 294.12,
              temp_max: 294.12,
              pressure: 1006,
              sea_level: 1006,
              grnd_level: 905,
              humidity: 81,
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
              speed: 8.41,
              deg: 252,
              gust: 15.84,
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
              temp: 296.1,
              feels_like: 296.3,
              temp_min: 296.1,
              temp_max: 296.1,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 905,
              humidity: 71,
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
              speed: 10.12,
              deg: 253,
              gust: 17.64,
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
              temp: 296.41,
              feels_like: 296.7,
              temp_min: 296.41,
              temp_max: 296.41,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 903,
              humidity: 73,
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
              speed: 9.85,
              deg: 256,
              gust: 17.64,
            },
            visibility: 10000,
            pop: 0.29,
            rain: {
              "3h": 0.2,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 09:00:00",
          },
          {
            dt: 1660046400,
            main: {
              temp: 295.05,
              feels_like: 295.31,
              temp_min: 295.05,
              temp_max: 295.05,
              pressure: 1003,
              sea_level: 1003,
              grnd_level: 903,
              humidity: 77,
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
              speed: 9.97,
              deg: 260,
              gust: 18.27,
            },
            visibility: 10000,
            pop: 0.33,
            rain: {
              "3h": 0.18,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-09 12:00:00",
          },
          {
            dt: 1660057200,
            main: {
              temp: 293.75,
              feels_like: 293.93,
              temp_min: 293.75,
              temp_max: 293.75,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 904,
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
              speed: 9.93,
              deg: 254,
              gust: 19.2,
            },
            visibility: 10000,
            pop: 0.2,
            rain: {
              "3h": 0.18,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-09 15:00:00",
          },
          {
            dt: 1660068000,
            main: {
              temp: 293.33,
              feels_like: 293.52,
              temp_min: 293.33,
              temp_max: 293.33,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
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
              all: 100,
            },
            wind: {
              speed: 9.83,
              deg: 249,
              gust: 19.2,
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
              temp: 292.97,
              feels_like: 293.17,
              temp_min: 292.97,
              temp_max: 292.97,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 903,
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
              speed: 8.36,
              deg: 246,
              gust: 18.3,
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
              temp: 293.16,
              feels_like: 293.33,
              temp_min: 293.16,
              temp_max: 293.16,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 903,
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
              all: 100,
            },
            wind: {
              speed: 8.59,
              deg: 243,
              gust: 18.33,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: "n",
            },
            dt_txt: "2022-08-10 00:00:00",
          },
          {
            dt: 1660100400,
            main: {
              temp: 293.38,
              feels_like: 293.68,
              temp_min: 293.38,
              temp_max: 293.38,
              pressure: 1005,
              sea_level: 1005,
              grnd_level: 904,
              humidity: 85,
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
              speed: 8.52,
              deg: 237,
              gust: 17.98,
            },
            visibility: 10000,
            pop: 0.07,
            sys: {
              pod: "d",
            },
            dt_txt: "2022-08-10 03:00:00",
          },
        ],
      },
    },
    bookMarks: ["Mangalore", "Bengaluru"],
  },
};

const getApp = (str: any) => {
  return (
    <Provider store={str}>
      <App />
    </Provider>
  );
};

describe("testing till weather description page", () => {
  it("search city in the search component", async () => {
    const { container } = render(getApp(mockStore(customStore)));

    const getSearchBar = screen.getByPlaceholderText("Search Location");
    fireEvent.change(getSearchBar, { target: { value: "Mangalore" } });
    const getById = queryByAttribute.bind(null, "id");
    const searchIcon = getById(container, "search-icon-button");
    searchIcon && fireEvent.click(searchIcon);
    searchIcon && fireEvent.click(searchIcon);
    const result = await screen.findAllByText("Mangalore");
    expect(result[1].innerHTML).toEqual("Mangalore");
  });

  it("weather card summary", async () => {
    const { container } = render(getApp(mockStore(customStore)));

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

  it("renders weather description page", async () => {
    const { container } = render(getApp(mockStore(customStore)));
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

    const cityWeatherCardLink = screen.getAllByTestId("navigate-desc");
    cityWeatherCardLink && cityWeatherCardLink[0].click();

    const getStupidDesc = await screen.findByTestId("weather-desc");
    expect(getStupidDesc).toBeInTheDocument();
  });
});

// test("renders added to list and remove button", () => {
//   render(getApp(mockStore(customStore)));
//   //   let getById = queryByAttribute.bind(null, "id");
//   //   const searchIcon = getById(container, "search-icon-button");
//   //   const getSearchBar = screen.getByPlaceholderText("Search Location");
//   //   searchIcon && userEvent.click(getSearchBar);
//   //   userEvent.type(getSearchBar, "Mangalore");
//   //   searchIcon && fireEvent.click(searchIcon);
//   //   getSearchBar && fireEvent.click(getSearchBar);
//   //   const weatherDescCard = await screen.findByTestId("summaryCard");
//   //   expect(weatherDescCard).toBeInTheDocument();
//   //   const cityWeatherCardLink = screen.getAllByTestId("navigate-desc");
//   //   cityWeatherCardLink && cityWeatherCardLink[1].click();
//   //   const getStupidDesc = await screen.findByTestId("weather-desc");
//   //   expect(getStupidDesc).toBeInTheDocument();
//   // getById = queryByAttribute.bind(null, "id");
//   // const getaddtolist = getById(container, "addtolist");
//   // getaddtolist && getaddtolist.click();
//   // const addedbtn = screen.getByTestId("added-button");
//   // expect(addedbtn.innerHTML).toEqual("Added to list ");
// });

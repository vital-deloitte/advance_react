export interface CloudType {
  dt: number;
  clouds: {
    all: number;
  };
  main: MainType;
}

export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface ChartDataType {
  chartData: {
    data: CloudType[];
  };
}

export interface ChartType {
  data: Array<CloudType>;
}

// export interface SubChartType {
//   dt: number;
//   main: MainType;
//   clouds: {
//     all: number;
//   };
// }

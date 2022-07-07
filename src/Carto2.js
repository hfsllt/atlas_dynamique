import React, { useState, useEffect } from "react";
import Highcharts, { map } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import Map from "./fr";

highchartsMap(Highcharts); // Initialize the map module

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const MapOptions_metro = {
  title: {
    text: " "
  },
  credits: {
    enabled: false
  },
  mapNavigation: {
    enabled: false
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "lat: {point.lat}, lon: {point.lon}"
  },
  series: Map
};

const App = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={"mapChart"}
    options={MapOptions_metro}
  />
);

export default App;

import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import mapDataIE from './topo.js';
highchartsMap(Highcharts);


console.log(typeof mapDataIE)
console.log(Object.getPrototypeOf(mapDataIE) === Map.prototype)

const staticOptions = {
 chart: {
   styledMode: true,
 },
 credits: {
   enabled: false,
 },
 title: {
   text: 'Orders by region<small>Highcharts Map API</small>',
   useHTML: true,
 },
 colorAxis: {
   min: 0,
 },
 tooltip: {
   headerFormat: '',
   pointFormat: `
     <b>{point.name}</b>: {point.value}`,
 },
 colorAxis: {
   minColor: '#FFEAE4',
   maxColor: '#FF6492',
 },
 series: [
   {
     name: 'Basemap',
     mapData: mapDataIE,
     borderColor: '#FFC3BA',
     borderWidth: 0.5,
     nullColor: '#FFEAE4',
     showInLegend: false,
     allowPointSelect: true,
     dataLabels: {
       enabled: true,
       format: '{point.name}',
       color: '#000',
     },
     states: {
       select: {
         borderColor: '#B5ACFF',
         color: '#7A77FF',
       },
     },
   },
 ],
};
export default ({ data }) => {
 const [options, setOptions] = useState({});
 useEffect(() => {
   setOptions({
     ...staticOptions,
     series: [
       {
         ...staticOptions.series[0],
         data: data,
       },
     ],
   });
 }, [data]);
 return (
   <HighchartsReact
     highcharts={Highcharts}
     constructorType={'mapChart'}
     options={options}
   />
 );
};


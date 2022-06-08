import logo from './logo.svg';
import './Carto.css';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map";
import React from 'react'
import topo from './fr-all.geo.json'

highchartsMap(Highcharts);


const data = [
  ['fr-cor', 10], ['fr-bre', 11], ['fr-pdl', 12], ['fr-pac', 13],
  ['fr-occ', 14], ['fr-naq', 15], ['fr-bfc', 16], ['fr-cvl', 17],
  ['fr-idf', 18], ['fr-hdf', 19], ['fr-ara', 20], ['fr-ges', 45],
  ['fr-nor', 22], ['fr-lre', 23], ['fr-may', 24], ['fr-gf', 25],
  ['fr-mq', 26], ['fr-gua', 27]
];


const chart = Highcharts.mapChart('container', {
  title: {
      text: 'Highcharts Maps basic demo '
  },  
  mapNavigation: {
    enabled: true,
    buttonOptions: {
        verticalAlign: 'bottom'
    }
  },
    series: {
      mapData: topo
    }
});

const InteractiveMap = () => (
  <>
    <div id="container" />
  </>
);

export default InteractiveMap;

/*
import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapFrance from './fr-all.geo.json';

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

var data = [
  ['ae', 37],
  ['af', 44],
  ['am', 20],
  ['az', 19],
  ['bd', 9],
  ['bh', 12],
  ['bn', 43],
  ['bt', 26],
  ['cn', 70],
  ['cnm', 33],
  ['cy', 48],
  ['ge', 27],
  ['id', 65],
  ['il', 29],
  ['in', 65],
  ['iq', 36],
  ['ir', 70],
  ['jk', 40],
  ['jo', 31],
  ['jp', 100],
  ['kg', 52],
  ['kh', 25],
  ['kp', 45],
  ['kr', 70],
  ['kw', 35],
  ['kz', 28],
  ['la', 38],
  ['lb', 46],
  ['lk', 51],
  ['mm', 13],
  ['mn', 34],
  ['my', 18],
  ['nc', 47],
  ['np', 50],
  ['om', 5],
  ['ph', 1],
  ['pk', 39],
  ['qa', 41],
  ['ru', 70],
  ['sa', 2],
  ['sg', 65],
  ['sh', 17],
  ['sp', 10],
  ['sy', 30],
  ['th', 4],
  ['tj', 22],
  ['tl', 24],
  ['tm', 32],
  ['tr', 65],
  ['tw', 49],
  ['uz', 23],
  ['vn', 21],
  ['ye', 6]
];

const mapOptions = {
  title: {
    text: ''
  },
  colorAxis: {
    min: 0,
    stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
  },

  series: [
    {
      mapData: mapFrance,
      name: 'France',
      data: data
    }
  ]
};

// Render app with demo chart
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Demos</h1>

        <h2>Highmaps</h2>
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
*/
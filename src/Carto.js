import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row, Container } from "react-bootstrap";
import mapData_metro from "./topo_fm";
import mapData_reu from "./topo_reu";
import mapData_may from "./topo_may";
import mapData_guy from "./topo_guy";
import mapData_mart from "./topo_mart";
import mapData_guad from "./topo_guad";
import mapData_tahiti_moorea from "./topo_tahiti_moorea";
import mapData_uturoa from "./topo_uturoa";
import mapData_futuna from "./topo_futuna";
import mapData_wallis from "./topo_wallis";
import mapData_nc from "./topo_nc";
import mapData_st_martin from "./topo_st_martin";
highchartsMap(Highcharts);

console.log(typeof mapDataIE);
console.log(Object.getPrototypeOf(mapData_metro) === Map.prototype);

const staticOptions_metro = {
  chart: {
    styledMode: true
  },
  credits: {
    enabled: false
  },
  title: {
    text: "France metropolitaine",
    useHTML: true
  },

  series: [
    {
      name: "Basemap",
      mapData: mapData_metro,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_reu = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_reu,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_may = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_may,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_guy = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_guy,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_mart = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_mart,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_guad = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_guad,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 100
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_tahiti_moorea,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_uturoa = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 50
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_uturoa,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_futuna = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 80
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_futuna,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_wallis = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_wallis,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_nc = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_nc,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_st_martin = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_st_martin,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

export default ({ data }) => {
  const [options_metro, setOptions_metro] = useState({});
  useEffect(() => {
    setOptions_metro({
      ...staticOptions_metro,
      series: [
        {
          ...staticOptions_metro.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_reu, setOptions_reu] = useState({});
  useEffect(() => {
    setOptions_reu({
      ...staticOptions_reu,
      series: [
        {
          ...staticOptions_reu.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_may, setOptions_may] = useState({});
  useEffect(() => {
    setOptions_may({
      ...staticOptions_may,
      series: [
        {
          ...staticOptions_may.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_guy, setOptions_guy] = useState({});
  useEffect(() => {
    setOptions_guy({
      ...staticOptions_guy,
      series: [
        {
          ...staticOptions_guy.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_mart, setOptions_mart] = useState({});
  useEffect(() => {
    setOptions_mart({
      ...staticOptions_mart,
      series: [
        {
          ...staticOptions_mart.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_guad, setOptions_guad] = useState({});
  useEffect(() => {
    setOptions_guad({
      ...staticOptions_guad,
      series: [
        {
          ...staticOptions_guad.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions({
      ...staticOptions,
      series: [
        {
          ...staticOptions.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_uturoa, setOptions_uturoa] = useState({});
  useEffect(() => {
    setOptions_uturoa({
      ...staticOptions_uturoa,
      series: [
        {
          ...staticOptions_uturoa.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_futuna, setOptions_futuna] = useState({});
  useEffect(() => {
    setOptions_futuna({
      ...staticOptions_futuna,
      series: [
        {
          ...staticOptions_futuna.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_wallis, setOptions_wallis] = useState({});
  useEffect(() => {
    setOptions_wallis({
      ...staticOptions_wallis,
      series: [
        {
          ...staticOptions_wallis.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_nc, setOptions_nc] = useState({});
  useEffect(() => {
    setOptions_nc({
      ...staticOptions_nc,
      series: [
        {
          ...staticOptions_nc.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_st_martin, setOptions_st_martin] = useState({});
  useEffect(() => {
    setOptions_st_martin({
      ...staticOptions_st_martin,
      series: [
        {
          ...staticOptions_st_martin.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={options_metro}
          />
        </Col>
        <Col xs={6}>
          <Container>
            <Row>
              <Col xs={1}>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_reu}
                />
              </Col>
              <Col xs={1}>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_guy}
                />
              </Col>
              <Col xs={1}>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_guad}
                />
              </Col>
              <Col xs={1}>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_may}
                />
              </Col>
              <Col xs={1}>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_mart}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_guad}
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={3}>
          <Container>
            <Row>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_uturoa}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_futuna}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_wallis}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_nc}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_st_martin}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

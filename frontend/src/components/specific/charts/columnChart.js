import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";

export default function ColumnChart() {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val.toFixed(0),
      },
      xaxis: {
        categories: ['Total de Fazendas', 'Total em Hectares'],
      },
      fill: {
        opacity: 1
      },
      title: {
        text: 'Fazendas e Hectares',
        align: 'center',
        style: {
          fontSize: '15px',
          fontWeight: 'bold',
        }
      },
      tooltip: {
        y: {
          formatter: (val) => val.toFixed(0),
        }
      }
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/charts/farm`);
        const farms = response.data;

        if (!farms || !Array.isArray(farms)) {
          throw new Error("Dados inválidos recebidos");
        }

        const totalFarms = farms.length;
        const totalarea = farms.reduce((sum, farm) => {
          const area = parseFloat(farm.totalarea) || 0;
          return sum + area;
        }, 0);

        setChartData(prevState => ({
          ...prevState,
          series: [{
            name: 'Fazendas e Hectares',
            data: [totalFarms, totalarea]
          }]
        }));
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
}
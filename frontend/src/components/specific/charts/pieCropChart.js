import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';

const CropPieChart = () => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'pie',
    },
    labels: [],
    title: {
        text: 'Distribuição por Culturas',
        align: 'center',
        style: {
          fontSize: '15px',
          fontWeight: 'bold',
        }
      },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            show: false,
          },
        },
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/charts/crop`);
        const crops = response.data;

        const labels = crops.map(crop => crop.name);
        const series = crops.map(crop => parseFloat(crop.percentage));

        setOptions(prevOptions => ({
          ...prevOptions,
          labels: labels,
        }));

        setData(series);
      } catch (error) {
        console.error('Error fetching crop data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <ApexCharts
        options={options}
        series={data}
        type="pie"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CropPieChart;
import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";

export default function PieChart() {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'pie',
      },
      labels: [],
      title: {
        text: 'Distribuição por Estado',
        align: 'center',
        style: {
          fontSize: '15px',
          fontWeight: 'bold',
        }
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            show: false,
          }
        }
      }]
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

        const stateCounts = farms.reduce((acc, farm) => {
          if (farm && farm.state) {
            const state = farm.state.toString().trim() || '';
            acc[state] = (acc[state] || 0) + 1;
          }
          return acc;
        }, {});

        if (Object.keys(stateCounts).length === 0) {
          throw new Error("Nenhum estado encontrado nos dados");
        }

        const states = Object.keys(stateCounts);
        const counts = Object.values(stateCounts);

        setChartData(prevState => ({
          ...prevState,
          series: counts,
          options: {
            ...prevState.options,
            labels: states
          }
        }));
      } catch (error) {
        console.error('Erro ao buscar os dados do gráfico:', error.message || error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
        height="100%"
      />
    </div>
  );
}
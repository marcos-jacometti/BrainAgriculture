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
        text: 'Distribuição das Áreas',
        align: 'center',
        style: {
          fontSize: '15px',
          fontWeight: 'bold',
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val, opts) => {
            const label = chartData.options.labels[opts.seriesIndex];
            return `${label}: ${val.toFixed(2)}%`;
          }
        }
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          opacity: 0.75
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
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

        const totalPlantedArea = farms.reduce((sum, farm) => sum + parseFloat(farm.plantedarea || 0), 0);
        const totalNousedArea = farms.reduce((sum, farm) => sum + parseFloat(farm.nousedarea || 0), 0);
        const totalArea = totalPlantedArea + totalNousedArea;

        if (totalArea === 0) {
          throw new Error("Total da área é zero. Não é possível calcular percentuais.");
        }

        const plantedAreaPercentage = (totalPlantedArea / totalArea) * 100;
        const nousedAreaPercentage = (totalNousedArea / totalArea) * 100;

        setChartData(prevState => ({
          ...prevState,
          series: [plantedAreaPercentage, nousedAreaPercentage],
          options: {
            ...prevState.options,
            labels: ['Área Plantada', 'Área Não Utilizada']
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
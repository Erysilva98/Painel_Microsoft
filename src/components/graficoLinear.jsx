import React from 'react';
import { Line } from 'react-chartjs-2';

const GraficoMensal = () => {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Linha 1',
        data: [10, 15, 12, 8, 20, 17, 16, 14, 18, 22, 19, 13],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
      },
      {
        label: 'Linha 2',
        data: [5, 8, 10, 12, 9, 14, 18, 16, 11, 9, 7, 6],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GraficoMensal;

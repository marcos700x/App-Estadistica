import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

const PoligonoFrecuencias = () => {

    const { dataGrafica, datosObservados, verGraficas } = useContext(DataContext)
    const { frecuencias, intervalos } = dataGrafica;
    const { poligono } = verGraficas;
    const labels = intervalos.map(n => n.replace(","," - "));
    

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        plugins : {
            legend: {
                position: 'bottom'
            }
        }
      };
       const data = {
        labels,
        datasets: [
          {
            label: 'Frecuencias',
            data: frecuencias,
            borderColor: '#09f',
            backgroundColor: 'rgba(0, 153, 255, 0.500)',
          },
        ],
      };
      
      if(datosObservados.length === 0) return;
      if(!poligono) return

    return (
        <>
            <h1>Polígono de Frecuencias</h1>
            <Line options={options} data={data} />
        </>
    )
}

export default PoligonoFrecuencias
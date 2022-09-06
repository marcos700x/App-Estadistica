import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const Histograma = () => {

    const  { dataGrafica, datosObservados, verGraficas}  = useContext(DataContext);
    const { intervalos, frecuencias } = dataGrafica;
    const { histograma } = verGraficas;
    const labels = intervalos.map(n => n.replace(","," - "));


    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      }
    }
    const data = {
      labels,
      datasets: [
        {
          label: 'Frecuencias',
          data: frecuencias,
          backgroundColor: '#09f',
        }
      ]
    }
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    if(datosObservados.length === 0) return;
    if(!histograma) return;
  return (
    <div>
      <h1 className='m-3 ms-0 mt-0'>Histograma</h1>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default Histograma
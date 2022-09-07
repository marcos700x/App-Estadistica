import React from 'react'
import { useContext, useEffect  } from 'react'
import { DataContext } from '../Context/DataContext'

const TablaFrecuencias = () => {

    const { conjuntoDatos, datosObservados, setDataGrafica, } = useContext(DataContext)
    const { amplitud, longitudDatos, numeroClases, } = conjuntoDatos;

    let dato_minimo = Math.min(...datosObservados);
    let arrayIntervalos = [[dato_minimo, dato_minimo + amplitud]];
    let arrayFrecuencias = [];
    let arrayFrecuenciasAcumuladas = [];
    let arrayFrecuenciasRelativas = [];
    let arrayFrecuenciasRelativasAcumuladas = [];
    const rows = [];


    const tableRows = () => {

        for (let i = 0; i <  numeroClases - 1; i++) {
            arrayIntervalos.push([arrayIntervalos[i][1] + 1, arrayIntervalos[i][1] + amplitud])
        }

        for (let i = 0; i <= numeroClases - 1; i++) {

            arrayFrecuencias.push(datosObservados.filter(n => n >= arrayIntervalos[i][0] && n <= arrayIntervalos[i][1]).length)
            arrayFrecuenciasRelativas.push(arrayFrecuencias[i] / longitudDatos)
            arrayFrecuenciasAcumuladas.push(arrayFrecuencias.reduce((prev, next) => prev + next, 0));
            arrayFrecuenciasRelativasAcumuladas.push(arrayFrecuenciasRelativas.reduce((prev, next) => prev + next, 0))
 

            rows.push(
                <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{arrayIntervalos[i][0]} - {arrayIntervalos[i][1]}</td>
                    <td>{(arrayIntervalos[i][0] + arrayIntervalos[i][1]) / 2}</td>
                    <td>{arrayFrecuencias[i]}</td>
                    <td>{arrayFrecuenciasAcumuladas[i]}</td>
                    <td>{arrayFrecuenciasRelativas[i]}</td>
                    <td>{arrayFrecuenciasRelativasAcumuladas[i] > 0.9999 ? 1 : arrayFrecuenciasRelativasAcumuladas[i]}</td>
                </tr>
            )
         
        }
  
        return rows
     
    }

        useEffect(() => {
                setDataGrafica({
                    intervalos: arrayIntervalos.map(n => n.toString()),
                    frecuencias: arrayFrecuencias.map(n => n.toString()),
                })    
                
        }, [conjuntoDatos, amplitud])


    if(datosObservados.length === 0) return;

  return (
    <>
    <h1 className='m-3 ms-0'>Tabla de Frecuencias</h1>
    <div className="table-responsive">
    <table className='table table-bordered table-hover'>
        <thead>
            <tr className='table-primary'>
                <th scope='col'>Clases</th>
                <th scope='col'>Intervalos</th>
                <th scope='col'>Marca&nbsp;de&nbsp;clase</th>
                <th scope='col'>Frecuencia</th>
                <th scope='col'>Frecuencia&nbsp;Acumulada</th>
                <th scope='col'>Frecuencia&nbsp;Relativa</th>
                <th scope='col'>Frecuencia&nbsp;Relativa Acumulada</th>
            </tr>
        </thead>
        <tbody>
            {tableRows()}
        </tbody>
    </table>
    </div>
    </>

  )
}

export default TablaFrecuencias
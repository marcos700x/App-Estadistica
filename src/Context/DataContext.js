import { createContext, useState } from 'react'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [verGraficas, setVerGraficas] = useState({
    histograma: false,
    poligono: false,
  })

    const [dataGrafica, setDataGrafica] = useState({
      intervalos: [],
      frecuencias: [],
    })
    const [datosObservados, setDatosObservados] = useState([])
    const [conjuntoDatos, setConjuntoDatos] = useState({
             moda: [],
            mediaAritmetica: 0,
            mediana: 0,
            rango: 0,
            longitudDatos: 0,
            desviacionEstandar: 0,
            numeroClases: 0,
            amplitud: 0,
    });
  return (
    <DataContext.Provider value={{
      conjuntoDatos,
       setConjuntoDatos,
        datosObservados,
         setDatosObservados,
          dataGrafica,
           setDataGrafica,
           verGraficas,
           setVerGraficas,
           }}>
        { children }
    </DataContext.Provider>
  )
}

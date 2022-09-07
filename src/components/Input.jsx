import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { formula_mediaAritmetica, formula_moda, formula_mediana, formula_rango, formula_longitud_datos, formula_desviacionEstandar, numero_clases, formula_amplitud } from '../data/Formulas';

const Input = () => {

    const refCheckboxHistograma = useRef(null);
    const refCheckboxPoligono = useRef(null);
    const {  setConjuntoDatos, datosObservados, setDatosObservados, setVerGraficas, verGraficas } = useContext(DataContext);
    const input = useRef(null);


    const handleInput = () => {
        if(!input.current.value || input.current.value.match('([a-z]|[A-Z])')) return;
        var arrayStringFromInput = input.current.value.split(',');
        var arrayIntFromInput =  arrayStringFromInput.map(x => parseFloat(x))
        setDatosObservados(arrayIntFromInput.sort((a,b) => a - b));
        input.current.value = ''
    }
    const handleCheckbox = () => {

      if(refCheckboxHistograma.current.checked) setVerGraficas({...verGraficas, histograma: true})
      if(refCheckboxPoligono.current.checked) setVerGraficas({...verGraficas, poligono: true})

    }
 
    useEffect(() => {
        setConjuntoDatos({
            moda: formula_moda(datosObservados),
            mediaAritmetica: formula_mediaAritmetica(datosObservados),
            mediana: formula_mediana(datosObservados),
            rango: formula_rango(datosObservados),
            longitudDatos: formula_longitud_datos(datosObservados),
            desviacionEstandar: formula_desviacionEstandar(datosObservados),
            numeroClases: numero_clases(datosObservados),
            amplitud: formula_amplitud(formula_rango(datosObservados), numero_clases(datosObservados))
        })

    }, [datosObservados])



  return (
    <div className="col">
    <div className="row g-2">
    <div className="col-sm-12 col-md-8 col-lg-10 ">
      <input type="text" className='form-control fs-5' ref={input} />
    </div>
    <div className="col-sm-12  col-md-4 col-lg-2 d-flex ">
      <button className='btn btn-primary' onClick={handleInput}>Calcular</button>
    </div>
  </div>
  <p className='mt-1 mb-2'>Ingresa los datos (números) a evaluar separados por una coma. Ej: 1,2,3,4 </p>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={refCheckboxHistograma}  onChange={handleCheckbox}/>
  <label className="form-check-label fs-6" htmlFor="flexCheckDefault">
    Mostrar Histograma
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={refCheckboxPoligono} onChange={handleCheckbox}/>
  <label className="form-check-label fs-6" htmlFor="flexCheckDefault">
    Mostrar Poligono de frecuencias
  </label>
</div>
  <hr/>
 
  
    </div>
  )
}

export default Input
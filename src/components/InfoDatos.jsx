import React from 'react'
import { DataContext } from '../Context/DataContext'
import { FaPencilAlt, FaCheck, FaCopy } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import { formula_amplitud, numero_clases } from '../data/Formulas';

const InfoDatos = () => {



    const {datosObservados, conjuntoDatos, setConjuntoDatos} = useContext(DataContext)
    const { moda, mediaAritmetica, rango, mediana, longitudDatos, desviacionEstandar,  amplitud } = conjuntoDatos;

    const [disableEdit, setDisableEdit] = useState(true)
  
  const handleDisableInput = () => {
    setDisableEdit(!disableEdit)
  }
  const handleChangeInput = (e) => {
    setConjuntoDatos({
      ...conjuntoDatos,
      numeroClases: e.target.value,
      amplitud: formula_amplitud(rango, e.target.value)
    })
  }    

    if(datosObservados.length === 0) return;
    return (
    <>
    <div className="col lead fs-5">
    <b className='fs-4'>Datos observados: </b>
    <p className='text-break mb-1'>
    {datosObservados.toString()}
    </p>
    <button className='btn btn-secondary' title='Copiar al portapapeles' onClick={() => navigator.clipboard.write(datosObservados)}>
      <FaCopy/>
      </button>
    </div>
     <hr />
  <div className="row">
    <div className="col">
    <ul>
    <li>
  <p className="lead fs-5"><b className='fs-5'>Media Aritmetica: </b>{mediaAritmetica}</p>
    </li>
    <li>
    <p className="lead fs-5"><b className='fs-5'>Moda: </b>{moda.length < 1 ? "No hay moda" : moda.length === 2 ? `${moda} (Bimodal)` : moda.length > 2 ? `${moda} (Multimodal)` : moda}</p>
    </li>
    <li>
  <p className="lead fs-5"><b className='fs-5'>Mediana: </b>{mediana}</p>
    </li>
    <li>
        <p className="lead fs-5"><b className='fs-5'>Cantidad de datos: </b>{longitudDatos}</p>
    </li>
  </ul>
    </div>
    <div className="col">
    <ul>
    <li>
  <p className="lead fs-5"><b className='fs-5'>Rango: </b>{rango}</p>
    </li>
    <li>

  <div className="row">
    <div className="col-auto">
    <p className='fs-5 mb-0'>Numero de clases recomendado: </p>
    </div>
    <div className="col-2 ms-0 me-0 p-0" >
    <input className='form-control text-center' type="number"  disabled={disableEdit}  defaultValue={numero_clases(datosObservados)} onChange={handleChangeInput}/>
    </div>
    <div className="col-2 ps-1 p-0">
    <button onClick={handleDisableInput} className={disableEdit ? 'btn btn-secondary' : 'btn btn-success'}>
      {disableEdit ?<FaPencilAlt/>  :  <FaCheck/> }
    </button>
    </div>
    </div>

    </li>
    <li>
    <p className="lead fs-5"><b className='fs-5'>Amplitud: </b>{amplitud}</p>
    </li>
    <li>
  <p className="lead fs-5"><b className='fs-5'>Desviacion Estandar: </b>{desviacionEstandar}</p>
    </li>
  </ul>
    </div>
  </div>
  <hr />
    </>
  )
}

export default InfoDatos
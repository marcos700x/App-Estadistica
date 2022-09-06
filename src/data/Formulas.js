
export const formula_moda = (param) => Array.from(new Set(param.filter((n, i) => n === param[i + 1] || n === param[i - 1])));

export const formula_mediaAritmetica = (param) => param.length > 0 ? param.reduce((prev, next) => prev + next) / param.length : 0;

export const formula_mediana = (param) => (param.length % 2) === 0 ?
    (param[param.length / 2 - 1] + param[param.length / 2]) / 2 :
    param[(param.length - 1) / 2];

export const formula_rango = (param) => Math.max(...param) - Math.min(...param);

export const formula_longitud_datos = (param) => param.length;

export const formula_desviacionEstandar = (param) => {
    var mediaAritmetica = param.reduce((prev, next) => prev + next, 0) / param.length;
    var suma = param.map(n =>  Math.pow(n-mediaAritmetica, 2)).reduce((prev, next) => prev + next, 0);
    var ds = Math.sqrt(suma / (param.length - 1))
    return ds
}
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  
  getBaseLog(2,50)

 export  const numero_clases = (param) => Math.round(1 +  Math.log(param.length) / Math.log(2) )

 export const formula_amplitud = (param, param2) => Math.round(param / param2);

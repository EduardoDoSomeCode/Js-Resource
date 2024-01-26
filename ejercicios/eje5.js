// Cuanto es el X por ciento de X numero

const porcentageOfNumber =(numberPorcentaje, numberTotal)=>{
    let result = (numberPorcentaje * numberTotal ) / 100

    return `El ${numberPorcentaje}% de ${numberTotal} es ${result}`
}
console.log(porcentageOfNumber(43,897))
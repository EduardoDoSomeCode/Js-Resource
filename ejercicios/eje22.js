// Dados dos numero indicar cual es mayor y cual menor 


const compareNumbers =(num,numTwo)=>{

    if(num > numTwo){

        return `\n EL NUMERO MAYOR ES : ${num} \n EL NUMERO MENOR ES : ${numTwo}` 
    }else if( num == numTwo){
        return "AMBOS NUMEROS SON IGUALES"
    }
    return `\n EL NUMERO MAYOR ES : ${numTwo} \n EL NUMERO MENOR ES : ${num}` 
}

console.log(compareNumbers(5,9))
console.log(compareNumbers(5,5))
console.log(compareNumbers(10,5))
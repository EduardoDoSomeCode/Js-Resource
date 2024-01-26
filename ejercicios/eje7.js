// Dados dos numeros , devolver cuantos numeros impares hay entre ellos
// numberOne Initial Number (min number)
// numberTwo final Number (Max number)
// numero par 2,4,6,8,10
// numero impar 3,5,7,
const imparNumbers =(numberOne, numberTwo)=>{

    let imparNumberCounter = 0
    for (let i = numberOne; i < numberTwo; i++) {


        if(i % 2 == 1){
            // console.log(`el numero ${i} es impar`)
            imparNumberCounter  += 1
        }else{
            imparNumberCounter
        }

    }
    return imparNumberCounter

}

const imparNumbersTwo =(numOne,numTwo)=>{

    let counter = 0;
    while (numOne < numTwo) {

        if( numOne % 2 == 1){
            counter++
        }

        numOne++

    }
    return `numero impares : ${counter}`

}
console.log(imparNumbers(1,100))
console.log(imparNumbersTwo(1,100))




//Given a array and a string repeat the string the times the number indicate
//Dado una palabra y un numero , repetir la palabra el numero de veces que indique el numero

const  repeatString =(string, number)=>{

    string = string.repeat(number)

    return string
}

const repeatStringTwo =(string, number)=>{

    let stringRepeat =""
    for (let i = 0; i < number; i++) {
        stringRepeat += string
        
    }

    return stringRepeat

}

const repeatStringThree =(string,number)=>{

    let stringPrint =""
    let counter= 0
    while (counter < number) {
        stringPrint += string
    
        counter++
    }

     return stringPrint
}

//Function Prototipo
//Se crea una funcion la cual puede ser utilizada por todos los string, ademas de 
//ahorrarse argumentos, usando la palabra clave "THIS"
String.prototype.Repetir =function ( number){

    let stringRepeat =""
    for (let i = 0; i < number; i++) {
        stringRepeat += this
        
    }

    return stringRepeat

} 

console.log("Eduardo ".Repetir(4))
console.log(repeatString("hola ", 5))
console.log(repeatStringTwo("hola ", 5))
console.log(repeatStringThree("hola ", 5))


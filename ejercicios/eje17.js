/**
 * Dado  un numero que de el usuario, tener que imprimir todos los numeros de 1 hasta donde indique el usuario
 * Imprimir "FIzz" para los numeros que sean mutliplos de 3
 * Imprimir "Buzz" para los numeros que sean multiplois de 5
 * Imprimir "FizzBuzz" para los numeros que sean multiplos de 3 y 5
 */


const fizzBuzz=(number = 0)=>{

    let result = ""

   for (let i = 1; i <= number; i++) {
    
    if(i % 3 == 0 && i % 5 == 0){
        result += "FizzBuzz \n"

    }
    else if(i % 3 ==0){
        result +="Fizz \n"

    }
    else if(i % 5 ==0){
        result +="Buzz \n"
        

    }else{
        result += `${i}\n`
    }
    
   } 

   return result

}

console.log(fizzBuzz(100))
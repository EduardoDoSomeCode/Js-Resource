// Dado un numero , mostrar todos sus numeros divisores
// showDivisor(5)
// 1
// 5


const showDivosors=(number)=>{
    
    let resultNumbers = ""

    for (let i = 0; i <= number; i++) {

        if(number % i  == 0  ){
            resultNumbers += `${i} \n`
        }
        
    }
    return resultNumbers
}

console.log(showDivosors(20))
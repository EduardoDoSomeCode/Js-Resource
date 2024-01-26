// Dado un array de enteros y un numero ,detectar si esa lista de numeros
// es una permutacion  del 1 al numero  recivido

// en este caso una permutacion es una secuencia de numeros en orden

// permutacion([1,2,3,4,5],5)  true

// permutacion([1,2,2,2,5],5)  true

const permutacionTest = (array, number) => {

    let result;
    let counter = 0

    for (let num in array) {

        console.log(num)
        counter += num
        if(num != num +1 ){
            return  result = false
        }else{
            result = true
        }


        

        
    }
    return result
}

console.log(permutacionTest([1, 2, 3, 4, 5],5))
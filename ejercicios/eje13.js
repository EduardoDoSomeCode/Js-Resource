//Dividir un arreglo en  arreglos de X elementos


const arrayToSubArray = (initalArray, numberOfArrays) => {
    let personalArray = []

    let subArray = []
    for (let i = 0; i < initalArray.length; i++) {


        personalArray.push(initalArray.splice(0, numberOfArrays))


    }
    return personalArray

}

console.log(arrayToSubArray([0, 1, 2, 3, 4, 5, 8], 2))

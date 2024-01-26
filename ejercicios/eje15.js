//Dada una cadena de texto, devolver el caracter más usado
//Dividir string
//Contar cada caracter
//Devolver el caracter con mayor contador
const mostUseCharacter = (string) => {


    let newString = string.toLowerCase().split("")
    let mapObject = {}
    let maxNumber = 0
    let moreReapetWord = ""
    for (let word of newString) {

        if (mapObject[word]) {
            mapObject[word]++
        } else {
            mapObject[word] = 1
        }


    }

    for (let letras in mapObject) {

        if (mapObject[letras].toString().trim().length === 1 && mapObject[letras] > maxNumber) {
            maxNumber = mapObject[letras]
            moreReapetWord = letras
        }
    }

    console.log(mapObject)

    return `letra mas repetida ${moreReapetWord}`





}
console.log(mostUseCharacter("Esto es una forma de poder mejorar y aprender más"))
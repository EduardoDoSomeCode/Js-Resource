// Dadas dos cadenas de texto , crear un algoritmo que compruebe si son anagramas entre si 

// no tener en cuenta espacios, simbolos raros, puntos

// anagrama("Riesgo", "Sergio")  true
// anagrama("Victor", "Robles")  true

//First attempt
const cleanString = (value) => {
    value = value.toLowerCase().replace(/[!¡.,-]/gi, "").split("").sort()

    return value
}

const anagrama = (string = "", stringtwo = "") => {

    let firstCleanString = cleanString(string)
    let firstCleanStringTwo = cleanString(stringtwo)

   
    let result = false
    for (let word of firstCleanString) {

        result = stringtwo.includes(word)
    }


    return result
}
console.log(
    anagrama("PedroMartinez!", "PedroMartinez")

)


//Seconde Attempt
const cleanStringOpt = (value) => {
    value = value.toLowerCase().replace(/[^\w]/gi, "").split("").sort().join("")

    return value
}

const anagramaFinal = (string = "", stringtwo = "") => {

    let firstCleanString = cleanString(string)
    let firstCleanStringTwo = cleanString(stringtwo)

   
    if (firstCleanString.length !== firstCleanStringTwo.length) {
        return false; // If lengths are different, they can't be anagrams
    } 

    return firstCleanString === firstCleanStringTwo;
}
console.log(
    anagramaFinal("PedroMartinez!", "PedroMartinez")

)



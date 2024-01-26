// Crear una funcion que  tome una palabra y cuente las vocales que esta contiene

const countVowels = (word) => {

    word = word.toLowerCase()

    let vowelMatch = /[aeiou]/g

    let total = word.match(vowelMatch)

    return total ?  `Numero de vocales: ${total.length}` : 0
}


console.log(countVowels("the great person of uuu"))
//Dada una cadena de texto, devolver en mayuscula  la primera letra de cada palabra y devolverla

// toUppercase("hola soy eduardo") // Hola Soy Eduardo


const toUppercaseString = (string) => {


     string = string.split(" ")
    let upperString = ""
    for (let word of string) {


        upperString += `${word.charAt(0).toUpperCase() + word.slice(1)} `
    }

    return upperString
}

const secondSolution =(string)=>{
let result =""

for(let word in string){
    if(string[word -1 ] === " " || parseInt(word)  === 0){
        result += string[word].toUpperCase()

    }else{
        result += string[word]
    }
}
return result
}

const thirdSolution =(string)=>{
    let words =[]

    for(let word of string.split(" ")){
        words.push(word[0].toUpperCase() + word.substring(1))

    }

    return words.join(" ")

}


console.log(toUppercaseString("This is something")) 
console.log(secondSolution("This is something")) 
console.log(thirdSolution("This is something")) 

//Invertir el texto, sin usar functiones nativas del lenguaje
const invertText = (stringTxt) => {

    let invertWord = ""

    for (let i = stringTxt.length; i >= 0; --i) {
        invertWord += stringTxt[i]
    }

    return invertWord
}


const invertTextTwo =(string)=>{

    let inverseWord=""
    for(let letra of string){

        inverseWord = letra + inverseWord
    }

    return inverseWord
}

const inverseTextThree =(string)=>{
    return string.split("").reverse().join("")

}
console.log(invertTextTwo("robles"))

// Dado una cadena de texto y un numero, recortar la frase hasta donde 
// diga el numero

// recortar("Hola compañero", 4) // Hola 

//First attempt

const cutString =(string = "",number = string.length)=>{

    if(typeof string ===  "string"  && typeof number === "number"){
        return string = string.slice(0,number)
    }
    
        return "Introduce datos"
   

    

}

//Second Attempt 
const cutStringTwo = (string="", num = string.length)=>{
    if(!string && !num){
        return "Introduce datos"
    }
    return string.substring(0,num)
}

console.log(cutString("This is a text", 8) )

console.log(cutStringTwo() )



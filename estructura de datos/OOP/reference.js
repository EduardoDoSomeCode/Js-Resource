//En javascript todo es un objeto, menos los tipos primitivos, 
//string, int, boolean, bigint, symbol
//El valor que se pasa a un funcion es el valor

let number= 4

const numberChange =(num,value)=>{

    num = value
    console.log("el valor interno es " + num)
}

console.log(numberChange(number,10))

console.log("El valor externo es " + number)

//Valores por referencia
class A{
    constructor(number){
        this.number = number

    }
}


//Lo objetos que se mandan como parametros, no se mandan como copia, se mandan tal cual
let a = new A(5)

const editObjet =(obj,value)=>{
    obj.number = value;
    console.log("el valor interno es " + obj.number)
}

editObjet(a,10)
console.log("el valor externo es de  a " + a.number )

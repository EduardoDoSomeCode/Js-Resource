
//Imprimier la tabla de multiplicacion de un numero
const  numberToTable =(number)=>{

    let  tableOfnumber = `# Tabla del ${number} #\n`
    for (let i = 1; i < 11; i++) {
        tableOfnumber += (`${number} x ${ i } = ${ number * i } \n`)

    }
    return  tableOfnumber
}

console.log(numberToTable(2))


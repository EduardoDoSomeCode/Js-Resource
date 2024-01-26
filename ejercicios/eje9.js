
// De dos arreglos tener que devolver un arreglo con elementos en comun

const devolverArreglo =(arrayOne,arrayTwo)=>{

    const arrayFiltrado = arrayOne.filter(elemet => arrayTwo.includes(elemet))

    return arrayFiltrado


}

console.log(devolverArreglo([0,1,3,4,7,2], [0,1,2,0,5]))

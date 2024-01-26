// Tener que  pasar dos parametros, texto y palabra clave, la palabra clave tiene que ser remplaza con el texto "[-CENSURADO-]"

const censhorhipFunction = (text = false, keyWord = false) => {
    if (!text && !keyWord) {
        return "No puedes leer el texto o la busqueda"
    }
    else if (!text && keyWord) {
        return "No puedes leer el texto "
    } else if (text && !keyWord) {
        return "No puedes hacer  la busqueda"
    }

    let newText = text.replace(new RegExp(keyWord, "gi"), "[-CENSURADO-]")


    return newText
}

console.log(censhorhipFunction())
console.log(censhorhipFunction("Este es mi texto personal", "mi"))
console.log(censhorhipFunction("hola hola hola ", "hola"))
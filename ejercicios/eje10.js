// Tener que crear una escalera de valores basado en un numero 
// [-]

const buildScales = (num) => {

    let scales = ""

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < i; j++) {


            scales += `[-]`

        }

        scales += "\n"
    }

    return scales

}

console.log(buildScales(5))
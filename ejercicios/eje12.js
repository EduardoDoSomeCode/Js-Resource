
const showTheNNumber = (num) => {

    let numbers = `--- Del ${num} al 0 --- \n`

    for (let i = num; i > 0; i -= 8) {


        numbers += `- n°${i} \n`


        if(i <= 0){
            numbers +=  `- n°0 \n`

        }


    }

    numbers +=  `- n°0 \n`
    numbers += "---- FIN ----"


    return numbers
}


console.log(showTheNNumber(100))

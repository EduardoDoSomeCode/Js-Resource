// usar un hasmap en lugar de mi metodo
const countWordInPhrases = (phrasesToSearch, string) => {
    let arrayToSearch = phrasesToSearch.toLowerCase().replace(/[!¡.,-]/gi,"")
    let stringSearch = string.toLowerCase().replace( /[!¡.,-]/gi ,"")
    let repetitionOfWords = 0
    let newArrayOfItems = arrayToSearch.split(" ")

    newArrayOfItems.map((item) => {

        if (item == stringSearch) {
            repetitionOfWords++
        }

    })

    return `Devuelve: ${repetitionOfWords}` 
}

const countWordInPhraseOpt =(phrasesToSearch, string)=>{
        let cleanText = phrasesToSearch.toLowerCase().replace(/[!¡.,-]/gi,"");
        let resultado = 0;

        if (cleanText.includes(string)){
            let palabras = cleanText.split(" ")
            let mapa = {}

            for(let word of palabras){

                if(mapa[word]){
                    mapa[word]++
                }else{
                    mapa[word] = 1
                }

            }

           

            resultado = mapa[string]


        }else{
            resultado = 0
        }

        return resultado

}

// console.log(countWordInPhrases("Coño luis, luis, luis", "luis"))
console.log(countWordInPhraseOpt("Coño luis, luis, luis", "luis"))
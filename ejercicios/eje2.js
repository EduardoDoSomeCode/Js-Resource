// Hacer una funcion para tener que verificar si es un palindrome o no
const itIsPalindrome = (palindrome) => {

    // let isPalindrome = "Yes"

    let answer = palindrome.split("").reverse().join("")

    // if (palindrome == answer) {
    //     return isPalindrome
    // } else {
    //     isPalindrome = "No"
    //     return isPalindrome
    // }

    return palindrome == answer
}

console.log(itIsPalindrome("ana"))
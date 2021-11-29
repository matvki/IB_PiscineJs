let string
let tamp
let result

document.querySelector('#submit').addEventListener('click', () => {
    string = document.querySelector('#string').value
    result = isPalindrome(string)
    console.log(result);
})

function isPalindrome(string){
    tamp = string.split('').reverse().join('')
    if (tamp === string) {
        document.write('<p>'+string+' est un palindrome</p>')
        return true
    }
    return false
}

// Merci de ne pas effacer la ligne en dessous.
exports.isPalindrome =  isPalindrome;
let string
let tamp

document.querySelector('#submit').addEventListener('click', () => {
    string = document.querySelector('#string').value
    isPalindrome(string)
})

function isPalindrome(string){
    tamp = string.split('').reverse().join('')
    if (tamp === string) {
        document.write('<p>'+string+' est un palindrome</p>')
        console.log('Vrai')
    }
}

// Merci de ne pas effacer la ligne en dessous.
exports.isPalindrome =  isPalindrome;
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
    return tamp === string;
}

// Merci de ne pas effacer la ligne en dessous.
exports.isPalindrome =  isPalindrome;
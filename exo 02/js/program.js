let array
let result

document.querySelector('#submit').addEventListener('click', () => {
    array = document.querySelector('#numbers').value.split(',')
    threeLargestNumbers(array)
})

function threeLargestNumbers(array){
    if (array.length < 3) {
        document.write('<p>Merci de mettre au moins 3 nombres</p>')
    } else {
        result = array.sort(compare)
        console.log(result[0], result[1], result[2])
        document.write(result[0] + ', ' + result[1] + ', ' + result[2])
        function compare(x, y) {
            return y - x;
        }
    }
}

// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;
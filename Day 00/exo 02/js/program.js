let array
let result

document.querySelector('#submit').addEventListener('click', () => {
    array = document.querySelector('#numbers').value.split(',')
    result = threeLargestNumbers(array)
    console.log(result)
})

function threeLargestNumbers(array){
    let result
    if (array.length < 3) {
        document.write('<p>Merci de mettre au moins 3 nombres</p>')
    } else {
        result = array.sort(compare)
        document.write(result[0] + ', ' + result[1] + ', ' + result[2])
        function compare(x, y) {
            return y - x;
        }
        return [result[0], result[1], result[2]]
    }
}

// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;
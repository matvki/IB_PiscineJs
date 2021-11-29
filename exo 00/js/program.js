let array
let targetSum
let test
let tamp = null
let tampNumber
let alreadyPrint = 0

document.querySelector('#submit').addEventListener('click', () => {
    array = document.querySelector('#numbers').value.split(',')
    targetSum = document.querySelector('#target').value
    twoNumberSum(array, targetSum)
})

function twoNumberSum(array, targetSum){
    targetSum = parseInt(targetSum)
    array.forEach(function (number, i) {
        array.forEach(function (num, j) {
            alreadyPrint = 0
            if (i !== j) {
                test = parseInt(number, 10) + parseInt(num, 10)
                if (test === targetSum) {
                    if (tamp !== null) {
                        tamp.forEach(function (value) {
                            tampNumber = num + ' + ' + number + ' = ' + targetSum
                            if (value === tampNumber) {
                                alreadyPrint = 1
                            }
                        })
                    }
                    if (alreadyPrint !== 1) {
                        document.write('<p>' + number + ' + ' + num + ' = ' + targetSum + '</p>')
                        tamp = [number + ' + ' + num + ' = ' + targetSum]
                    }
                }
            }
        })
    })
    console.log(tamp)
}

// Merci de ne pas effacer la ligne en dessous.
// exports.twoNumberSum =  twoNumberSum;
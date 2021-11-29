let array
let targetSum
let result

document.querySelector('#submit').addEventListener('click', () => {
    array = document.querySelector('#numbers').value.split(',')
    targetSum = parseInt(document.querySelector('#target').value)
    result = twoNumberSum(array, targetSum)
    console.log(result)
})

function twoNumberSum(array, targetSum){
    let alreadyPrint = 0
    let test
    let tamp = []
    let tampNumber
    array.forEach(function (number, i) {
        array.forEach(function (num, j) {
            alreadyPrint = 0
            if (i !== j) {
                test = parseInt(number, 10) + parseInt(num, 10)
                if (test === targetSum) {
                    if (tamp !== null) {
                        tamp.forEach(function (value) {
                            tampNumber = [num, number]
                            if (value[0] === tampNumber[0] && value[1] === tampNumber[1]) {
                                alreadyPrint = 1
                            }
                        })
                    }
                    if (alreadyPrint !== 1) {
                        tamp.push([number , num])
                    }
                }
            }
        })
    })
    return tamp
}

// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;
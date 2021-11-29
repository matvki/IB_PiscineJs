let array = [ 3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10
console.log(twoNumberSum(array,targetSum))

function twoNumberSum (array, targetSum) {
    let result = []
    array.forEach(function (number, i) {
        array.forEach(function (num, j) {
            if (i !== j) {
                if ((number + num) === targetSum) {
                    result.push(number, number)
                }
            }
        })
    })
    let res = result.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return res
}

// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;
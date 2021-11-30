console.log(firstDuplicateValue([ 2, 1, 5, 3, 3, 2, 4]))

function firstDuplicateValue(array){
    let res = null
    array.forEach(function (value, i) {
        if (res !== null) {
            return res
        }
        array.forEach(function (value1, j) {
            if (i !== j) {
                if (value === value1) {
                    res = value
                    return value
                }
            }
        })

    })
    if (res !== null) {
        return res
    }
    return -1
}

// Merci de ne pas effacer la ligne en dessous.
exports.firstDuplicateValue =  firstDuplicateValue;
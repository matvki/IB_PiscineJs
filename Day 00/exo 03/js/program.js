let string = 'abdcadcfe'
let array
let tamp = 0
let length
let result
result = firstNonRepeatingCharacter(string)
console.log(result)

function firstNonRepeatingCharacter(string) {
    array = string.split('')
    length = array.length
    array.forEach(function (value, i) {
        tamp = 0
        array.forEach(function (value1, j) {
            if (i !== j) {
                if (value === value1) {
                    tamp = tamp + 1
                }
            }
        })
        if (tamp === 0) {
            return value
        }
    })
}

// Do not edit the line below.

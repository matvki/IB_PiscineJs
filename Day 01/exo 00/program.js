console.log(tabTriCarre([1,2,3,4,5]))

function tabTriCarre(array){
    array.forEach(function (value, key) {
        array[key] = value * value
    })
    return array.sort(function(a, b) {return a - b;})
}

// Merci de ne pas effacer la ligne en dessous.
exports.tabTriCarre =  tabTriCarre;
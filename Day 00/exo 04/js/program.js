let result = levDist('mpi', 'oui2')
console.log(result)

function levDist(str1, str2){
    let dif = 0
    let length = Math.max(str1.length, str2.length)
    for (let i=0;i<length;i++){
        if (str1.split('')[i] !== str2.split('')[i]) {
            dif++
        }
    }
    return dif
}

// Merci de ne pas effacer la ligne en dessous.
exports.levDist =  levDist;
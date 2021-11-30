console.log(pocketMoney([ 5, 7, 1, 1, 2, 3, 22]))

function pocketMoney(array){
    let arrSort = array.sort(function(a, b) {return a - b;})
    let sCoin = 0;
    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] > sCoin + 1){
            return sCoin + 1
        }
        sCoin += arrSort[i]
    }
    return sCoin + 1
}

// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney =  pocketMoney;
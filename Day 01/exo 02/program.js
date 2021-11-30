console.log(pocketMoney([ 5, 7, 1, 1, 2, 3, 22]))

function pocketMoney(array){
    let P = array.sort(function(a, b) {return a - b;})
    let sCoin = 0;
    for (let i = 0; i < P.length; i++) {
        if (P[i] > sCoin + 1){
            return sCoin + 1
        }
        sCoin += P[i]
    }
    return sCoin + 1
}

// Merci de ne pas effacer la ligne en dessous.
exports.pocketMoney =  pocketMoney;
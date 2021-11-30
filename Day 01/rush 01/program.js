let restoreIpAddresses = function(s) {
    let res =[]
    convert(s,0,res,[],4,s.length)

    function convert(s,ind,res,temp,seg,l){

        if ((seg===0 && ind < l) || (seg!==0 && ind >= l )) return
        if (seg===0 && ind === l){
            res.push(temp.slice().join('.'))
            return
        }

        for (let i=1;i<=3;i++){
            if (ind+i > l) break
            let test = s.substring(ind,ind+i)
            if (verify(test)){
                temp.push(test)
                convert(s,ind+i,res,temp,seg-1,l)
                temp.pop()
            }
        }
    }

    function verify(test){
        if (test.length > 1 && test[0] === '0') return false
        if (parseInt(test) <= 255) return true
        return false
    }
    return res
};

console.log(restoreIpAddresses("1921680"))

// Merci de ne pas effacer la ligne en dessous.
    exports.validIPAddresses = validIPAddresses;
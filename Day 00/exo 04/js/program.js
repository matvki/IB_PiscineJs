result = levDist2("abc","yabd")
console.log(result)

function levDist2(string1, string2) {
    let i = 0;
    let j = 0;
    let result = "";
    while (j < string2.length)
    {
        if (string1[i] !== string2[j] || i === string1.length)
            result += string2[j];
        else
            i++;
        j++;
    }
    return result.length;
}
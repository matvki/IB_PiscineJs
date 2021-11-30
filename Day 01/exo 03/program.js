console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))

function runLengthEncoding(string) {
    let encodedString = "";
    let currentLetter = string[0];
    let letterCount = 1;
    for (let i = 1; i < string.length + 1; i++) {
        if (string[i] === currentLetter && letterCount < 9) {
            letterCount++;
        } else {
            encodedString += letterCount + currentLetter;
            currentLetter = string[i]
            letterCount = 1;
        }
    }
    return encodedString
}

// Merci de ne pas effacer la ligne en dessous.
    exports.runLengthEncoding = runLengthEncoding;
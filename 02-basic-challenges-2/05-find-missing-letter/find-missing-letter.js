function findMissingLetter(arr) {
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // first let's figure out where to start in alphabet
    const firstChar = alphabet.indexOf(arr[0]);
    // console.log(firstChar);
    // 
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== alphabet[firstChar + i]) {
            return alphabet[firstChar + i]
        }
    }

    return ''
}

module.exports = findMissingLetter;

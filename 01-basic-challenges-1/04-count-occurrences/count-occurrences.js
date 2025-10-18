// For of loop (For in is for objects)
function countOccurrences(word, charToSearch) {
    let counter = 0;
    for (const char of word) {
        if (char === charToSearch) {
            counter++
        }
    }
    return counter;
}

// basic c style for loop
// function countOccurrences(word, charToSearch) {
//     let counter = 0;
//     for (let c = 0; c < word.length; c++) {
//         if (word[c] === charToSearch) {
//             counter++;
//         }
//     }
//     return counter;
// }

module.exports = countOccurrences;

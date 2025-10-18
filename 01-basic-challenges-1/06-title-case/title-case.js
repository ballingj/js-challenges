// function titleCase(str) {
//     wordList = str.toLowerCase().split(' ');
//     // console.log(wordList)
//     for (let i = 0; i < wordList.length; i++) {
//         wordList[i] = wordList[i][0].toUpperCase() + wordList[i].slice(1);
//     }
//     return wordList.join(" ")
// }

// using map
function titleCase(str) {
    wordlist = str.toLowerCase().split(' ').map( 
        word => word[0].toUpperCase() + word.slice(1)
    )
    return wordlist.join(' ')
}

// titleCasedSentence = titleCase("I'm a little teapot; short and STOUT")
// console.log(titleCasedSentence)

module.exports = titleCase;

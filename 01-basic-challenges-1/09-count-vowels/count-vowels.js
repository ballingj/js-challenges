function countVowels(str) {
    let vowelsCount = 0;
    // let strippedVowels = str.map(char => isVowel(char))
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            vowelsCount++;
        }  
    }
    return vowelsCount
}

//helper function to check if a char is vowel
function isVowel(char) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char);
}

// regex solution
// function isVowel(char) {
//     return /^[aeiou]$/i.test(char); // 'i' flag for case-insensitive matching
// }


module.exports = countVowels;

/*
Explanation of methods:
includes() on a string:
This method checks if a string contains a specified substring. By creating a string of 
all vowels (both uppercase and lowercase), you can directly check if the input character is present.

Regular Expression:
The regex /^[aeiou]$/i matches a string that consists of exactly one character, which must 
be 'a', 'e', 'i', 'o', or 'u' (case-insensitive due to the i flag). The test() method of a 
regex returns true if a match is found.

*/
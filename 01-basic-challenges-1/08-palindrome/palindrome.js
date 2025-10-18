// function isPalindrome(str) {
//     //1. format the str: remove non-alphachar
//     let formatStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     //2. reverse the formatted str
//     let reversedStr = formatStr.split('').reverse().join('');

//     //3. compare reversed str with formatted str
//     return reversedStr === formatStr;    

// }

// non-regex solution using helper functions
function isPalindrome(str) {
    const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
    const reversedStr = reverseString(formattedStr)
    return reversedStr === formattedStr;
}

// helper function to remove non alpha-numeric characters
function removeNonAlphaNumeric(str) {
    let formattedStr = '';
    for (i = 0; i < str.length; i++) {
        if (isAlphaNumeric(str[i])) {
            formattedStr += str[i];
        }
    }
    return formattedStr;
}


//helper function for removeNonAlphaNumeric to determine if a char is alpha-numeric or not 
function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
}

// helper function to reverse a string
function reverseString(str) {
    let reversed = '';
    for (i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


module.exports = isPalindrome;

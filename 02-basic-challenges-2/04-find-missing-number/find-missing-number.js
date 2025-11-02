function findMissingNumber(arr) {
    
    n = arr.length + 1
    const sumOfNumbers = n * (n + 1) / 2
    const sumOfArray = arr.reduce((acc, elem) => acc + elem)
    return sumOfNumbers - sumOfArray
}

module.exports = findMissingNumber;

function findMissingNumber(arr) {
    // If the array is empty or undefined, return undefined
    if (!arr || arr.length === 0) {
        return undefined;
    }
    n = arr.length + 1
    const sumOfNumbers = n * (n + 1) / 2
    const sumOfArray = arr.reduce((acc, elem) => acc + elem)
    return sumOfNumbers - sumOfArray
}

module.exports = findMissingNumber;

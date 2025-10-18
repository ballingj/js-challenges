function findMaxNumber(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > max) {
            max = arr[i];
            // console.log("new max:", max);
        }
    }
    return max;
}

// console.log(findMaxNumber([5,4,3,2,1,7,2,8,9]))

module.exports = findMaxNumber;

function removeDuplicates(arr) {
    let noDuplicates = [];

    for (let i = 0; i< arr.length; i++) {
        if (!noDuplicates.includes(arr[i])) {
            noDuplicates.push(arr[i]);
        }
    }
    return noDuplicates;
}

module.exports = removeDuplicates;

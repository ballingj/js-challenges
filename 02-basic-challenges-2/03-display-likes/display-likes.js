function displayLikes(names) {
    const nameCount = names.length;

    if (nameCount > 3) {
        return `${names[0]}, ${names[1]} and ${nameCount - 2} others like this`
    } else if (nameCount === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (nameCount === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (nameCount == 1) {
        return `${names[0]} likes this`
    } else {
        return 'no one likes this'
    }

}

module.exports = displayLikes;

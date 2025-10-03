
function createMultiples(array_length, multiplier) {
    let result = new Array;
    for (let i = 1; i <= array_length; i++) {
            result.push(i * multiplier)
        }
    return result
}

module.exports = {
    createMultiples,
};

function createMultiples(array_length, multiplier) {
    let result = new Array()
    for (let number_to_multiply = 1; number_to_multiply <= array_length; number_to_multiply++) {
        result.push(multiplier * number_to_multiply);
    }
    return result
}; 



console.log(createMultiples(2,4));
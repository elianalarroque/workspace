function createMultiples(array_lenght, multiplier) {
    let result = new Array()
    for (let number_to_multiply = 1; number_to_multiply <= array_lenght; number_to_multiply++) {
        result.push(multiplier * number_to_multiply);
    }
    return result
}; 



console.log(createMultiples(2,4));
// 1.6 Crea una clase RomanNumberTransformer para transformar
// números naturales a números romanos y viceversa (máximo que admite
// 1000, si no, da un error).

const ROMAN_TO_NATURAL = [
  ['I', 1],
  ['IV', 4],
  ['V', 5],
  ['IX', 9],
  ['X', 10],
  ['XL', 40],
  ['L', 50],
  ['XC', 90],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
];

class RomanNumberTransformer {
  constructor(inputData, isNatural) {
    if (isNan(parseInt(inputData))) {
      if (inputData[0] == 'M' && inputData.length > 1) {
        throw new RangeError('The input number can not be larger than 1000');
      }
    } else {
      if (inputData > 1000) {
        throw new RangeError('The input number can not be larger than 1000');
      }
      this.inputData = inputData;
    }
  }
  naturalToRoman() {
    let result = "";
    for (let i = 0; i < ROMAN_TO_NATURAL.length; i++) {
        if (this.inputData == ROMAN_TO_NATURAL[i][1]) {
            result += this.inputData
        }
    }
    return result;
  }
  romanToNatural() {
    let result = ' ';
    return result;
  }
}

module.exports = {
  RomanNumberTransformer,
};

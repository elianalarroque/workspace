
function isLeapYear(year) {
  year = parseInt(year);
  let result;
  if (year % 400 == 0) {
    result = true;
  } else if (year % 100 == 0) {
    result = false;
  } else if (year % 4 == 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

module.exports = {
    isLeapYear,
};

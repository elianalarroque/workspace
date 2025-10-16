/*28.
Define a function capitalize_last_name() that accepts as
argument a string with a (single) first and a (single) last name,
and returns a string in which only the first letter of the first name
is uppercase, whereas all letters of the last name are
uppercase; in otherwords, 'marisa tomei' becomes 'Marisa
TOMEI'. (Tip: use str.split() to split a str into separate words.) If
something other than a str object is passed as an argument, the
function should raise a TypeError. (Tip: you can use isistance() to
check whether an object is of a particular type.) If the str does
not consist of exactly two words, the function should raise a
ValueError.*/


function capitalize_last_name(name, lastname) {
let result = "";

return result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + " " + lastname.toUpperCase();
}

function capitalize_last_name(data) {
 if (typeof data != "string") {
    
 }
}

module.exports = {
    capitalize_last_name
}
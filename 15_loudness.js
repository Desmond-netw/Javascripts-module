// converts all characters to uppercase

function makeLouder(text) {
    return text.toUpperCase();
}

// converts all to lowercase
function makeQuieter(text) {
    return text.toLowerCase();
}



console.log(makeLouder("hello world"));
// "HELLO WORLD"

console.log(makeLouder("abc-123*"));
// "ABC-123*"

console.log(makeQuieter("HELLO WORLD"));
// "hello world"

console.log(makeQuieter("ABC-123*"));
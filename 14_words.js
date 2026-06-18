// splits a string by delimiter

function splitByDelimiter(text,delimi) {
    return text.split(delimi);
}

function joinWithDelimiter(arr, joiner) {
    return arr.join(joiner);
}

console.log(splitByDelimiter('One, Two, Three', ', '))
console.log(joinWithDelimiter(['Four', 'Five', 'Six'], '-*-'))
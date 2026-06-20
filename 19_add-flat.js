const sumNestedArray = (arr) => {
    // flaten array
    const flatArray = arr.flat(Infinity);

    function isANumber (item) {
        return typeof item === "number"
    }

    // filter for only numbers 
   const numbersOnly = flatArray.filter(isANumber);

    // sum numbersOnly

    let sum = 0;
    for (let i = 0; i < numbersOnly.length; i++){
        sum = sum +numbersOnly[i]
    }

    return sum;
}

console.log(sumNestedArray([10, [5, "broken", 3], [[2, 4], "empty"]]))
function convert2DArrayToObjectArray(data) {
  return data.map(([key, value]) => ({ [key]: value }));
}

const data = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

console.log(convert2DArrayToObjectArray(data));

function convertArrayOfObjectsToStrings(objects) {
  return objects.map(obj => {
    // Get the object's own enumerable properties in insertion order
    const entries = Object.entries(obj);
    // Format each key-value pair
    const formattedPairs = entries.map(([key, value]) => {
      // Capitalize the first letter of the key
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      return `${capitalizedKey}: ${value}`;
    });
    // Join all pairs with ", "
    return formattedPairs.join(", ");
  });
}

const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
];

console.log(convertArrayOfObjectsToStrings(objects));


function concatenateStrings(strings, maxLength) {
  return strings.map(str => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  });
}

const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];
console.log(concatenateStrings(strings, 5));
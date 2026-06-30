function getTotalFromShoppingBasket (basket){
    return basket.reduce((total, item) => total + item.price, 0)
}


/**
 * Calculates the average age from an array of people.
 * @param {Array<{name: string, age: number}>} people
 * @returns {number} Average age (can be a decimal).
 */

function getAverageAge(people){
    // check for empty array
    if(people.length === 0) return 0;
    const totalAge = people.reduce((sum, person) => sum + person.age,0);
    return totalAge / people.length;
}

/**
 * Groups values by key from an array of key-value pairs.
 * @param {Array<{key: string, value: any}>} objects
 * @returns {Object.<string, any[]>} - Object with keys mapped to arrays of values.
 */

function concatenateObjects(objects) {
    
    return objects.reduce((result, {key, value}) => {
        if (!result[key]){
            result[key] = [];
        }
        result[key].push(value);
        return result;
    }, {})
}


// Example : finding total from shoping basket
const shoppingBasket = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.5 },
  { name: "Orange", price: 3 },
  { name: "Mango", price: 4 },
];
console.log("Total :")
console.log(getTotalFromShoppingBasket(shoppingBasket));

// Example: finding avarage age of people

const people = [
  
];

console.log("Average Age :")
console.log(getAverageAge(people));


// Example of  Object concatenating
const objects = [
  { key: "a", value: 1 },
  { key: "b", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 4 },
  { key: "b", value: 5 },
];

console.log(concatenateObjects(objects));
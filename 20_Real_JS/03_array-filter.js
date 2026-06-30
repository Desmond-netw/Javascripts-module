// finding ord numbers

function filterOutOddNumbers (numbers) {
    return numbers.filter(function (number){
        return number % 2 === 0;
    })
};

function filterObjectsByNameLength(objects, maxLength) {
    return objects.filter(function (person){
        return person.name.length <= maxLength;
    });
}

function compoundFilter(products) {
  return products.filter(function (product) {
    return (
      typeof product.code === "string" &&
      product.code.length > 5 &&
      !product.category.includes("special") &&
      product.price > 50 &&
      product.location !== "Underground"
    );
  });
}

const objects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]

console.log(filterOutOddNumbers(['1','2','3','4']))
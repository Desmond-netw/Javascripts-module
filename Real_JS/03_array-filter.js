// finding ord numbers

function filterOutOddNumbers (numbers) {
    return numbers.filter(function (number){
        return number % 2 === 0;
    })
}

const objects = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
]

console.log(filterOutOddNumbers(['1','2','3','4']))
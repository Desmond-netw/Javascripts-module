// CreatePerson

const createPerson = (firstName, lastName,age) => {
    let obj = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    
    return obj;
}

console.log(createPerson('Max','Cool',35));

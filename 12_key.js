// getValue From key in obj

const getValueFromKey = (obj, key) => {
    if(key === 0) {
        return undefined
    }
    return obj[key];
}


//  add value to keys
const addKeyValuePairs = (obj, newPairs) => {
    if (newPairs === 0){
        return undefined
    }

    return {
        ...obj,
        ...newPairs
    };
}

const location = {
  city: 'Tallinn',
  country: 'Estonia',
}

console.log(getValueFromKey(location, 'city'))
console.log(getValueFromKey(location, 'continent'))

console.log(addKeyValuePairs(location, { airports: ['TLL']}))
console.log(addKeyValuePairs(location, { highestElevation: 64 }))
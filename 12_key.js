// getValue From key in obj

const getValueFromKey = (obj, key) => {
    if(key === 0) {
        return undefined
    }
    return obj[key];
}

const Person = {
    name:"Peter",
}

console.log(getValueFromKey(Person,"name"))

console.log(getValueFromKey(Person,"city"))
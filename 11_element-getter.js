// Get Element from array

// arrow functions

const getFirstElement = (data) => {
    if(data.length === 0) {
        return undefined;
    }
    return data[0]
}

const getLastElement = (data) => {

    if( data.length === 0) {
        return undefined;
    }
    return data[data.length - 1];
}

const getElementByIndex = (data, index) => {
    if( index < 0 || index > data.length){
        return undefined;
    } else if (data.length === 0) {
        return undefined;
    }

    return data[index]
}


let data = "9book";
let index = 3;

console.log(getFirstElement(data));
console.log(getLastElement(data));
console.log(getElementByIndex(data,index))
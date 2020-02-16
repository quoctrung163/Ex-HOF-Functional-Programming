function getFunc(getNumberFunc) {
    return arr => {
        return getNumberFunc(arr);
    }
}

function getNumberFunc(arr) {
    return Math.max(...arr);
    // Ex: Math.max(1, 2, 3) => 3
}

const getNumber = getFunc(getNumberFunc);

console.log(getNumber([1, -5, 8999]));
// 8999

function reversedArray(array) {
    let reversed = [];
    for (let i= (array.length-1) ; i>=0 ; i--) {
        reversed.push(array[i])
    }
    return reversed
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = reversedArray(numbers)

console.log(numbers)
console.log(result)
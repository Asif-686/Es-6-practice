const number  = [10,15,20]
number.push('asif')
console.log(number)
// Using let
let x = 10;
console.log(x); // Output: 10
x = 20; // Reassignment is allowed
console.log(x); // Output: 20

let array1 = [1, 2, 3];
array1.push(4); // Modifying the array is allowed
console.log(array1); // Output: [1, 2, 3, 4]
array1 = [5, 6, 7]; // Reassignment is allowed
console.log(array1); // Output: [5, 6, 7]

// Using const
const y = 30;
console.log(y); // Output: 30
// y = 40; // This would throw an error: Assignment to a constant variable

const array2 = [1, 2, 3];
array2.push(4); // Modifying the array is allowed
console.log(array2); // Output: [1, 2, 3, 4]
// array2 = [5, 6, 7]; // This would throw an error: Assignment to a constant variable

// Block scope demonstration
{
    let blockLet = 'visible inside block';
    const blockConst = 'also visible inside block';
}
// console.log(blockLet); // This would throw an error: blockLet is not defined
// console.log(blockConst); // This would throw an error: blockConst is not defined

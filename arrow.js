// normal function// normal function
function add(a, b) {
  return a + b;
}

// Arrow function variations

// 1. Basic arrow function
const addArrow = (a, b) => {
  return a + b;
};

// 2. Concise arrow function (implicit return)
const addArrowConcise = (a, b) => a + b;

// 3. Arrow function with single parameter (parentheses optional)
const square = x => x * x;

// 4. Arrow function with no parameters
const getRandomNumber = () => Math.random();

// 5. Arrow function returning an object (wrap the object in parentheses)
const createPerson = (name, age) => ({ name, age });

// Examples of using these functions
console.log(add(5, 3));                    // 8
console.log(addArrow(5, 3));               // 8
console.log(addArrowConcise(5, 3));        // 8
console.log(square(4));                    // 16
console.log(getRandomNumber());            // Random number between 0 and 1
console.log(createPerson('Alice', 30));    // { name: 'Alice', age: 30 }


// Multiline arrow function
const calculateArea = (width, height) => {
  const area = width * height;
  const message = `The area is ${area} square units.`;
  return message;
};

console.log(calculateArea(5, 3)); // "The area is 15 square units."

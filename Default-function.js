
// Function with default parameters
function greet(name = "Guest", greeting = "Hello", punctuation = "!") {
    console.log(`${greeting}, ${name}${punctuation}`);
}

// Using the function with different argument combinations
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!
greet("Charlie", "Welcome", "."); // Output: Welcome, Charlie.

// Function with default parameter using another parameter
function calculateArea(length, width = length) {
    return length * width;
}

console.log(calculateArea(5)); // Output: 25 (assumes square)
console.log(calculateArea(6, 4)); // Output: 24 (rectangle)

// Function with default parameter as an expression
function getRandomItem(array = [1, 2, 3, 4, 5]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

console.log(getRandomItem()); // Output: Random number from 1 to 5
console.log(getRandomItem(['a', 'b', 'c'])); // Output: Random item from custom array

// Function with object destructuring and default parameters
function printUserInfo({name = "Anonymous", age = "Unknown", country = "Not specified"} = {}) {
    console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

printUserInfo(); // Output: Name: Anonymous, Age: Unknown, Country: Not specified
printUserInfo({name: "John", age: 30}); // Output: Name: John, Age: 30, Country: Not specified
printUserInfo({name: "Emma", country: "Canada"}); // Output: Name: Emma, Age: Unknown, Country: Canada

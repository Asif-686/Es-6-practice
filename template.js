// Example of template string usage

// Basic template string
const name = 'Alice'
const greeting = `Hello, ${name}!`
console.log(greeting); // Output: Hello, Alice!

// Multi-line template string
const multiLine = `
  This is a multi-line
  template string.
  It preserves line breaks and indentation.
`
console.log(multiLine)

// Expression evaluation in template strings
const a = 5
const b = 10
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.

// Function calls in template strings
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const fruit = 'apple'
console.log(`I love ${capitalize(fruit)}s!`); // Output: I love Apples!

// Tagged template literals
function myTag(strings, ...values) {
  return strings.reduce((result, str, i) => 
    `${result}${str}${values[i] ? `(${values[i]})` : ''}`, '')
}

const item = 'book'
const price = 19.99
console.log(myTag`The ${item} costs $${price}.`); // Output: The (book) costs $(19.99).

/*
Explanation:
1. Template strings are enclosed in backticks (`) instead of quotes.
2. They allow for easy string interpolation using ${expression}.
3. Multi-line strings can be created without concatenation or escape characters.
4. Expressions and function calls can be evaluated inside ${}.
5. Tagged template literals allow for custom processing of template strings.
*/


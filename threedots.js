const num1 = [20,22,25,26,20]
const num2 = [24,21,28,29,18]
const num3 = num1.concat(num2)
const array = [...num1,...num2]
console.log(array)
const maximum = Math.max(...num3)
console.log(maximum);
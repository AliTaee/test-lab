/*
 * Pure simple unit tests
 */
const { sum, subtract } = require('../math')

let result, expected

result = sum(3, 7)
expected = 10

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(10, 8)
expected = 2

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

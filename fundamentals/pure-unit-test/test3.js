/*
 * Minimal and simple implementation of jest expect, toBe and toBeTrue
 */
const { sum, subtract, isEvenNumber } = require('../math')
let result, expected

result = sum(5, 5)
expected = 10
expect(result).toBe(expected)

result = subtract(10, 6)
expected = 4
expect(result).toBe(expected)

result = isEvenNumber(6)
expect(result).toBeTrue()

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeTrue() {
      if (!actual) {
        throw new Error('The number is not even!')
      }
    },
  }
}

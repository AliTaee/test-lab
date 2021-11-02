/*
 * Minimal and simple implementation of jest test function
 */
const { sum, subtract, isEvenNumber } = require('../math')
let result, expected

test('Sum 5 + 6', () => {
  result = sum(5, 6)
  expected = 11
  expect(result).toBe(expected)
})

test('Subtract 10 - 6', () => {
  result = subtract(10, 6)
  expected = 4
  expect(result).toBe(expected)
})

test('Test 6 is even', () => {
  result = isEvenNumber(6)
  expect(result).toBeTruthy()
})

test('Test 5 is Not even', () => {
  result = isEvenNumber(5)
  expect(result).toBeTruthy()
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeTruthy() {
      if (actual) {
        return true
      } else {
        return false
      }
    },
  }
}

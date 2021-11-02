const { sum, subtract, isEvenNumber } = require('../math')

describe('Test sum function', () => {
  test('with 10 + 5', () => {
    let result, expected
    result = sum(10, 5)
    expected = 15
    expect(result).toBe(expected)
  })

  test('with 6 + 4', () => {
    let result, expected
    result = sum('6', '4')
    expected = 10
    expect(result).toBe(expected)
  })

  test('with -3 + 4', () => {
    let result, expected
    result = sum('-3', '4')
    expected = 1
    expect(result).toBe(expected)
  })
})

describe('Test Subtract function', () => {
  test('with 10 - 6', () => {
    let result, expected
    result = subtract(10, 6)
    expected = 4
    expect(result).toBe(expected)
  })

  test('with -2 - 2', () => {
    let result, expected
    result = subtract(-2, 2)
    expected = -4
    expect(result).toBe(expected)
  })
})

test('Number is even', () => {
  let result = isEvenNumber(10)
  expect(result).toBeTruthy()
})

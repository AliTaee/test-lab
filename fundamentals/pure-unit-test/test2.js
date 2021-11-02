/*
 * Unit tests with assert Nodejs
 */
const assert = require('assert')
const { sum, subtract } = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
assert.strictEqual(result, expected, `${result} is not equal to ${expected}`)

result = subtract(10, 8)
expected = 2
assert.strictEqual(result, expected, `${result} is not equal to ${expected}`)

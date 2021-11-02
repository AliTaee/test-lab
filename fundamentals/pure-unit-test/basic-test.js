/*
 * Every assertion created from two part
 * Result: Is what our program output
 * Expected: What our expectation and correct output
 * Then we compare result with expected
 */

const result = true
const expected = false

if (result !== expected) {
  throw new Error(`${result} is not ${expected}`)
}

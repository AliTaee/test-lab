import { reducer } from './redux-reducer'
import * as actionTypes from './actionTypes'

describe('testing reducer', () => {
  test('should return default value currently', () => {
    expect(reducer({ count: 999 }, {})).toEqual({ count: 999 })
  })

  test('should return initial value currently', () => {
    expect(reducer(undefined, {})).toEqual({ count: 0 })
  })

  test('should test INCREMENT action', () => {
    expect(reducer(undefined, { type: actionTypes.INCREMENT })).toEqual({
      count: 1,
    })
  })

  test('should test DECREMENT action', () => {
    expect(reducer(undefined, { type: actionTypes.DECREMENT })).toEqual({
      count: -1,
    })
  })

  test('should test wrong action type', () => {
    expect(reducer(undefined, { type: 'wrongType' })).toEqual({
      count: 0,
    })
  })

  test('should test INCREMENT action with initial value', () => {
    expect(reducer({ count: 10 }, { type: actionTypes.INCREMENT })).toEqual({
      count: 11,
    })
  })

  test('should test DECREMENT action with initial value', () => {
    expect(reducer({ count: 10 }, { type: actionTypes.DECREMENT })).toEqual({
      count: 9,
    })
  })
})

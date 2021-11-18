import { reducer } from './redux-reducer'
import * as actionTypes from './actionTypes'

test('Should render with default reducer', () => {
  expect(reducer(undefined, {})).toEqual({ count: 0 })
})

test('initial state in reducer', () => {
  expect(reducer({ count: 10 }, {})).toEqual({ count: 10 })
})

test('Should update count with increment action', () => {
  expect(reducer(undefined, { type: actionTypes.INCREMENT })).toEqual({ count: 1 })
})

test('Should update count with decrement action', () => {
  expect(reducer(undefined, { type: actionTypes.DECREMENT })).toEqual({ count: -1 })
})

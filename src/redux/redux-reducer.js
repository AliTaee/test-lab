import * as actionTypes from './actionTypes'
const initialState = { count: 0 }

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + 1,
      }
    case actionTypes.DECREMENT:
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}

export { reducer }

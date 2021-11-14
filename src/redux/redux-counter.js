import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './style.css'

function Counter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })
  return (
    <div>
      <h2>Counter</h2>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span aria-label="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export { Counter }

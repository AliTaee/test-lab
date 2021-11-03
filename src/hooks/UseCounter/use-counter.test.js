import React from 'react'
import { render, act } from '@testing-library/react'
import { useCounter } from './use-counter'

test('exposes the count and increment/decrement functions', () => {
  let result
  function TestComponent({ initialCount = 0, step = 1 }) {
    result = useCounter({ initialCount, step })

    return null
  }

  const { rerender, unmount } = render(<TestComponent />)

  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)

  unmount()

  rerender(<TestComponent initialCount={10} step={2} />)

  expect(result.count).toBe(10)
  act(() => result.increment())
  expect(result.count).toBe(12)
  act(() => result.decrement())
  expect(result.count).toBe(10)
})

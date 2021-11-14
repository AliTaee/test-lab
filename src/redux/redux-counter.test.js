import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './redux-reducer'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { store as appStore } from './redux-store'
import { Counter } from './redux-counter'

test('can render with redux with defaults', () => {
  render(
    <Provider store={appStore}>
      <Counter />
    </Provider>,
  )

  const countElement = screen.getByLabelText('count')
  userEvent.click(screen.getByText('+'))
  expect(countElement).toHaveTextContent(1)

  userEvent.click(screen.getByText('-'))
  expect(countElement).toHaveTextContent(0)
})

test('can render with redux custom initial state', () => {
  const store = createStore(reducer, { count: 3 })

  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )

  const countElement = screen.getByLabelText('count')
  userEvent.click(screen.getByText('+'))
  expect(countElement).toHaveTextContent(4)
})

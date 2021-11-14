import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { store } from './redux-store'
import { Counter } from './redux-counter'

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )

  const countElement = screen.getByLabelText('count')
  userEvent.click(screen.getByText('+'))
  expect(countElement).toHaveTextContent(1)

  userEvent.click(screen.getByText('-'))
  expect(countElement).toHaveTextContent(0)
})

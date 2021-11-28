import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Main from './index'

test('render with links to other pages', () => {
  render(
    <Router>
      <Main />
    </Router>,
  )

  expect(screen.getByRole('heading')).toHaveTextContent(/home/i)
  userEvent.click(screen.getByText(/About/i))
  expect(screen.getByRole('heading')).toHaveTextContent(/about/i)
})

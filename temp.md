import { axe, toHaveNoViolations } from 'jest-axe'
import userEvent from '@testing-library/user-event'
expect.extend(toHaveNoViolations)

import { render, screen } from '@testing-library/react'
import { Subscription } from './Subscription'

describe('renders subscription currently', () => {
  beforeEach(() => {
    render(<Subscription />)
  })

  test('submit button', () => {
    const submitElement = screen.getByText(/submit/i)
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()
  })

  test('input email', () => {
    const inputElement = screen.getByLabelText(/enter your email address/i)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'email')
    expect(inputElement).toHaveClass('sub-email__input--error')
  })

  test('alert message', () => {
    const alertElement = screen.getByRole('alert')
    expect(alertElement).toBeInTheDocument()
  })
})

describe('submit email successfully', () => {
  test('enter email and user could submit', () => {
    render(<Subscription />)

    const inputElement = screen.getByLabelText(/enter your email address/i)
    userEvent.type(inputElement, 'alitaee@gmail.com')
    expect(inputElement).toHaveClass('sub-email__input--valid')

    const submitElement = screen.getByText(/submit/i)
    expect(submitElement).toBeEnabled()

    const alertElement = screen.queryByRole('alert')
    expect(alertElement).not.toBeInTheDocument()
  })

  test('submit callback', () => {
    const submitCallBack = jest.fn()
    render(<Subscription submit={submitCallBack} />)

    const inputElement = screen.getByLabelText(/enter your email address/i)
    userEvent.type(inputElement, 'alitaee@gmail.com')

    const submitElement = screen.getByText(/submit/i)
    userEvent.click(submitElement)

    expect(submitCallBack).toHaveBeenNthCalledWith(1, 'alitaee@gmail.com')
  })
})

test('auto focus prop', () => {
  const { rerender, unmount } = render(<Subscription autoFocus />)
  const inputElement = screen.getByLabelText(/enter your email address/i)
  expect(inputElement).toHaveFocus()
  unmount()

  rerender(<Subscription />)
  const inputElementWithOutFocus = screen.getByLabelText(/enter your email address/i)
  expect(inputElementWithOutFocus).not.toHaveFocus()
})

test('form accessability', async () => {
  const { container } = render(<Subscription autoFocus />)
  const result = await axe(container)
  expect(result).toHaveNoViolations()
})

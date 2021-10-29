import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import userEvent from '@testing-library/user-event'
import { Subscription } from './Subscription'

expect.extend(toHaveNoViolations)

const SAMPLE_EMAIL = 'alitaee@gmail.com'
const LABEL_TEXT = /enter your email address/i
const BUTTON = /submit/i

describe('renders subscription currently', () => {
  beforeEach(() => {
    render(<Subscription />)
  })

  test('submit button', () => {
    const submitElement = screen.getByText(BUTTON)
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()
  })

  test('input email', () => {
    const inputElement = screen.getByLabelText(LABEL_TEXT)
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

    const inputElement = screen.getByLabelText(LABEL_TEXT)
    userEvent.type(inputElement, SAMPLE_EMAIL)
    expect(inputElement).toHaveClass('sub-email__input--valid')

    const submitElement = screen.getByText(BUTTON)
    expect(submitElement).toBeEnabled()

    const alertElement = screen.queryByRole('alert')
    expect(alertElement).not.toBeInTheDocument()
  })

  test('submit callback', () => {
    const submitCallBack = jest.fn()
    render(<Subscription submit={submitCallBack} />)

    const inputElement = screen.getByLabelText(LABEL_TEXT)
    userEvent.type(inputElement, SAMPLE_EMAIL)

    const submitElement = screen.getByText(BUTTON)
    userEvent.click(submitElement)

    expect(submitElement).toHaveTextContent(/submitted/i)
    expect(submitCallBack).toHaveBeenNthCalledWith(1, SAMPLE_EMAIL)
  })
})

test('auto focus prop', () => {
  const { rerender, unmount } = render(<Subscription autoFocus />)
  const inputElement = screen.getByLabelText(LABEL_TEXT)
  expect(inputElement).toHaveFocus()
  unmount()

  rerender(<Subscription />)
  const inputElementWithOutFocus = screen.getByLabelText(LABEL_TEXT)
  expect(inputElementWithOutFocus).not.toHaveFocus()
})

test('form accessability', async () => {
  const { container } = render(<Subscription />)
  const result = await axe(container)
  expect(result).toHaveNoViolations()
})

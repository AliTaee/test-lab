import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { savePost as mockSavePost } from '../../api'
import { Editor } from './Editor'

jest.mock('../../api')

afterEach(() => {
  jest.clearAllMocks()
})

const fakePost = {
  title: 'test title',
  content: 'test content',
  tags: ['tag1', 'tag2'],
}

const fakeUser = { id: 'user1' }

test('renders a form with title, content, tags and submit button', () => {
  mockSavePost.mockResolvedValueOnce()
  render(<Editor user={fakeUser} />)

  const inputTitle = screen.getByLabelText(/title/i)
  userEvent.type(inputTitle, fakePost.title)

  const inputContent = screen.getByLabelText(/content/i)
  userEvent.type(inputContent, fakePost.content)

  const inputTags = screen.getByLabelText(/tags/i)
  userEvent.type(inputTags, fakePost.tags.join(','))

  const submitButton = screen.getByText(/submit/i)
  userEvent.click(submitButton)
  expect(submitButton).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    userId: fakeUser.id,
  })
  expect(mockSavePost).toHaveBeenCalledTimes(1)
})

test('after submit inputs will be empty', () => {
  render(<Editor user={fakeUser} />)

  const inputTitle = screen.getByLabelText(/title/i)
  userEvent.type(inputTitle, fakePost.title)

  const inputContent = screen.getByLabelText(/content/i)
  userEvent.type(inputContent, fakePost.content)

  const inputTags = screen.getByLabelText(/tags/i)
  userEvent.type(inputTags, fakePost.tags.join(','))

  const submitButton = screen.getByText(/submit/i)
  userEvent.click(submitButton)

  expect(inputTitle.value).toBe('')
  expect(inputContent.value).toBe('')
  expect(inputTags.value).toBe('')
  expect(submitButton).toBeDisabled()
})

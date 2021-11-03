import React, { useState } from 'react'
import { savePost } from '../../api'
import './style.css'

function Editor({ user = { id: 1 } }) {
  const [isSaving, setIsSaving] = useState(false)

  function handleOnSubmit(e) {
    e.preventDefault()
    setIsSaving(true)
    const { title, content, tags } = e.target.elements
    savePost({
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map((t) => t.trim()),
      userId: user.id,
    })

    title.value = ''
    content.value = ''
    tags.value = ''
  }

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  )
}

export { Editor }

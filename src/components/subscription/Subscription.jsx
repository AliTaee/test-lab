import React, { useState } from 'react'
import './style.css'

function Subscription({
  submit = (email) => console.log(email),
  autoFocus = false,
}) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(event) {
    setEmail(event.target.value)
    if (isSubmitted) setIsSubmitted(false)
  }

  function handleSubmit() {
    submit(email)
    setEmail('')
    setIsSubmitted(true)
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const isEmailValidate = email.length >= 3 && !validateEmail(email)
  const isSubmitBtnDisabled = !validateEmail(email)
  const inputClassNames = isEmailValidate
    ? 'sub-email__input--error'
    : 'sub-email__input--valid'
  const submitButtonText = isSubmitted ? 'Submitted' : 'Submit'

  return (
    <div className="sub-email">
      <label htmlFor="subscription-email" className="sub-email__label">
        Enter your email address
      </label>
      <input
        data-testid="input-email"
        autoFocus={autoFocus}
        className={inputClassNames}
        id="subscription-email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        disabled={isSubmitBtnDisabled}
        className="sub-email__submit"
      >
        {submitButtonText}
      </button>
      <br />
      {isEmailValidate ? (
        <div role="alert">the email address is not valid</div>
      ) : null}
    </div>
  )
}

export { Subscription }

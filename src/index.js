import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import reportWebVitals from './reportWebVitals'

/* Redux component */
import { store } from './redux/redux-store'
import { Counter } from './redux/redux-counter'

/* Form component */
// import { Editor } from './components/form/Editor'

/* Interactive component */
// import { Subscription } from './components/subscription/Subscription'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

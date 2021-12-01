import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import reportWebVitals from './reportWebVitals'

/*
 Examples for Redux component

 import { Provider } from 'react-redux'
 import { store } from './redux/redux-store'
 import { Counter } from './redux/redux-counter'
 <Provider store={store}>
  <Counter />
 </Provider>
*/

/**
 Examples for testing components

 import { Editor } from './components/form/Editor'
 import { Subscription } from './components/subscription/Subscription'
 */

/**
 * Example for react router
 */
// import Main from './react-router-v6'
import { Main } from './react-router'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app/app'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/common.scss'

import * as fb from 'firebase/app'

fb.initializeApp({
  apiKey: 'AIzaSyAY71ATx2WhQ_BqDOLbmGAABxb9PUG1ne4',
  authDomain: 'zeljob.firebaseapp.com',
  databaseURL: 'https://zeljob.firebaseio.com',
  projectId: 'zeljob',
  storageBucket: 'zeljob.appspot.com',
  messagingSenderId: '176098179900'
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
)

serviceWorker.unregister()

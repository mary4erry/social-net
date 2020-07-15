import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"; 
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store.js'

import App from './App.jsx'

   ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
           <App />
        </Provider>
      </BrowserRouter>, document.getElementById('root')
   )


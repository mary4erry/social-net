import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"; 
import { HashRouter } from 'react-router-dom'
import store from './redux/redux-store.js'

import App from './App.jsx'

   ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
           <App />
        </Provider>
      </HashRouter>, document.getElementById('root')
   )


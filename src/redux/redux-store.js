import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import profileReducers from './reducers/profile.reducer'
import dialogsReducer from './reducers/dialogs.reducer'
import navbarReducer from './reducers/navbar.reducer'
import usersReducer from './reducers/users.reducer'
import authReducer from './reducers/auth.reducer'
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/app.reducer'

let reducers = combineReducers({
   profilePage: profileReducers,
   dialogsPage: dialogsReducer,
   navbar: navbarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)
))

window.__store__ = store

export default store
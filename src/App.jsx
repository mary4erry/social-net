import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {initializeApp} from './redux/reducers/app.reducer'

import style from './App.module.css'

import Navbar from './components/Navbar/Navbar.jsx'
import UsersContainer from './pages/Users/UsersContainer.jsx'
import HeaderContainer from './components/Header/HeaderContainer.jsx'
import LoginPage from './Forms/Login/Login.jsx'
import Loader from './controls/Loader/Loader.jsx'
import { WithSuspense } from './HOC/WithSuspense'
// import ProfileContainer from './pages/Profile/ProfileContainer.jsx'
// import DialogsContainer from './pages/Dialogs/DialogsContainer'
const DialogsContainer = React.lazy(() => import('./pages/Dialogs/DialogsContainer.jsx'))
const ProfileContainer = React.lazy(() => import('./pages/Profile/ProfileContainer.jsx'))

class App extends Component {
   componentDidMount() {
      this.props.initializeApp()
   }
   render() {
      return (
         ( !this.props.initialized 
            ? <Loader/>
            : <div className={style.container}>
               <HeaderContainer />
               <div className={style.appWrapper}>
                  
                  <Navbar state={this.props.store}/>
                  <div className={style.app_wrapper_content}>

                     <Route path="/dialogs" 
                        render={ WithSuspense( DialogsContainer )
                     }
                     />
                     <Route path="/profile/:userId?" 
                        render={ WithSuspense( ProfileContainer )
                     }
                     />
                     <Route path="/users"
                        render={() => <UsersContainer /> }
                     />
                     <Route path="/login"
                        render={() => <LoginPage /> }
                     />
                     {/* <Route path="/news" component={Profile} />
                     <Route path="/music" component={Profile} />
                     <Route path="/settings" component={Profile} /> */}
                  </div>
               </div>
            </div> 
         )  
      )
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

export default compose (
   withRouter,
   connect(mapStateToProps, {initializeApp}))(App)


import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

// components
import Navbar from './components/Navbar/Navbar.jsx'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import UsersContainer from './pages/Users/UsersContainer.jsx'

import style from './App.module.css'
import ProfileContainer from './pages/Profile/ProfileContainer.jsx'
import HeaderContainer from './components/Header/HeaderContainer.jsx'
import LoginPage from './Forms/Login/Login.jsx'
import { connect } from 'react-redux'
import {initializeApp} from './redux/reducers/app.reducer'
import { compose } from 'redux'
import Loader from './controls/Loader/Loader.jsx'


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
                        render={() => <DialogsContainer />}
                     />
                     <Route path="/profile/:userId?" 
                        render={() => <ProfileContainer />}
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
            </div> )  
      )
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

export default compose (
   withRouter,
   connect(mapStateToProps, {initializeApp}))(App)


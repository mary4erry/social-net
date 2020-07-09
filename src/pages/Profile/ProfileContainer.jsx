import React from 'react'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {getUserProfile, getStatus, updateStatus} from '../../redux/reducers/profile.reducer'
import { withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect.js'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class ProfileContainer extends React.Component {
   componentDidMount () {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authorizedUserId
         if(!userId ) {
            this.props.history.push('/login')
         } // redirect to login. cant see users profiles 
      } 
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }
   render () {
      // if (!this.props.isAuth) return <Redirect to={'/login'}/>

      return (
         <div>
            <Profile {...this.props} 
               profile={this.props.profile}
               status={this.props.status} 
               updateStatus={this.props.updateStatus} 
            />
         </div>
      )
   }  
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
})

export default compose(
   connect( mapStateToProps, { getUserProfile, getStatus, updateStatus }),
   withRouter,
   WithAuthRedirect
)(ProfileContainer)

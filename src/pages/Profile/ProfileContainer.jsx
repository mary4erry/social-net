import React from 'react'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { WithAuthRedirect } from '../../HOC/WithAuthRedirect.js'
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/reducers/profile.reducer'

class ProfileContainer extends React.Component {
   refreshProfile() {
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
   componentDidMount() {
      this.refreshProfile()
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
   }
   render () {

      return (
         <div>
            <Profile {...this.props} 
               profile={this.props.profile}
               status={this.props.status} 
               updateStatus={this.props.updateStatus} 
               isOwner={!this.props.match.params.userId}
               savePhoto={this.props.savePhoto}
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
   connect( mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
   withRouter,
   WithAuthRedirect
)(ProfileContainer)

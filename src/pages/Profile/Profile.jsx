import React from 'react'
// import ReactDom from 'react-dom'

// import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'

const Profile = (props) => {

   return (
      <div>
         <ProfileInfo 
            profile={props.profile}
            status={props.status} 
            updateStatus={props.updateStatus} 
         />
         <MyPostsContainer/>
      </div>
   )
}
export default Profile

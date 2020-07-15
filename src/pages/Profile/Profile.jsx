import React from 'react'
// import ReactDom from 'react-dom'

// import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'

const Profile = ({profile, status, updateStatus}) => {

   return (
      <div>
         <ProfileInfo 
            profile={profile}
            status={status} 
            updateStatus={updateStatus} 
         />
         <MyPostsContainer/>
      </div>
   )
}
export default Profile

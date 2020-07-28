import React from 'react'
// import ReactDom from 'react-dom'

// import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

   return (
      <div>
         <ProfileInfo 
            isOwner={isOwner}
            profile={profile}
            status={status} 
            updateStatus={updateStatus} 
            savePhoto={savePhoto}
            saveProfile={saveProfile}
         />
         <MyPostsContainer/>
      </div>
   )
}
export default Profile

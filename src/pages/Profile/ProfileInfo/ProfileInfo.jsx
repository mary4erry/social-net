import React from 'react'
// import ReactDom from 'react-dom'

import style from './ProfileInfo.module.css'
import Loader from '../../../controls/Loader/Loader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
   if (!profile) {
      return <Loader />
   }
   
   return (
      <div>
         {/* <div className={style.bgPhoto}>
            <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTueDqN7PI3oDcOWB2Y-RB-7CViMGHY9WurWemhCStStiFAhtVv&usqp=CAU"
               alt=""
            />
         </div> */}
         <div className={style.description}>
            <img className={style.ava_big} src={profile.photos.large} alt=""/>
            
            <ProfileStatusWithHooks 
               status={status}
               updateStatus={updateStatus} />
            <div> {profile.fullName} </div>
            {profile.aboutMe 
               && <div> О себе: {profile.aboutMe} </div>}
            
            {profile.lookingForAJob 
               && <div> Рассмотрю предложения о работе: {profile.lookingForAJobDescription}</div>}
            <div>
               Contacts: 
               {/* {profile.contacts.map( c => 
                  <span>{c}</span>
               )} */}
               {/* {profile.contacts.github} */}
            </div>
         </div>
      </div>
   )
}
export default ProfileInfo
